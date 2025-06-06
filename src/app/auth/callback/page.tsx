    // app/auth/callback/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';

export default function AuthCallbackPage() {
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const checkUserRoleAndRedirect = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        return router.push('/auth/login');
      }
      const { user_metadata: { role } } = user;
      if (role === 'customer') {
        router.push('/customer/dashboard');
      } else {
        router.push('/admin/dashboard');
      }
    };
    checkUserRoleAndRedirect();
  }, [router, supabase]);

  return <p>Redirecting...</p>;
}
