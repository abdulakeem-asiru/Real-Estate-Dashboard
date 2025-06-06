import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function updateSession(request: NextRequest) {
  const supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) => {
            supabaseResponse.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();
  const role = user?.user_metadata?.role;
  const path = request.nextUrl.pathname;

  const publicRoutes = [
    "/auth/login",
    "/auth/signup",
    "/auth/resetpassword",
    "/auth/confirm",
    "/auth/emailconfirmation",
  ];

  const roleRoutes = {
    company: "/admin",
    customer: "/customer",
    agent: "/agent",
  };

  const isPublicRoute = publicRoutes.some(route => path.startsWith(route));

  // If not logged in and trying to access a protected route
  if (!user && !isPublicRoute) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // If logged in, enforce role-based route protection
  if (user) {
    const allowedBaseRoute = roleRoutes[role as keyof typeof roleRoutes];

    // If route doesn't match user's role
    if (allowedBaseRoute && !path.startsWith(allowedBaseRoute)) {
      // Redirect them to their own dashboard
      return NextResponse.redirect(new URL(`${allowedBaseRoute}/dashboard`, request.url));
    }
    if(isPublicRoute){
      return NextResponse.redirect(new URL(`${allowedBaseRoute}/dashboard`, request.url));
    }
  }

  // Default return
  return supabaseResponse;
}
