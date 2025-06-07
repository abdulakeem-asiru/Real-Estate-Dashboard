import { type EmailOtpType } from "@supabase/supabase-js";
import { type NextRequest } from "next/server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = searchParams.get("next") ?? "/auth/callback";

  if (token_hash && type) {
    const supabase = await createClient();

    const { error: otpError } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });

    if (!otpError) {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        const { id, email, user_metadata } = user;
        const { full_name, role, company_name } = user_metadata;

        if (role === "customer") {
          await supabase
            .from("customers")
            .insert({ id, email, name: full_name });

           // Step 2: Insert into profile table
          const { error: profileError} = await supabase.from("profiles").insert({
            id,
            email,
            role,
            name: full_name
          });
          
          if (profileError ) {
            console.error("Failed to insert profile:", profileError);
            return redirect("/error");
          }
        }
        if (role === "company") {
          const { data: companyData, error: companyError } = await supabase
            .from("companies")
            .insert({ company_name })
            .select() // Required to get inserted row
            .single(); // Ensure we get a single object, not an array

          if (companyError || !companyData) {
            console.error("Failed to insert company:", companyError);
            return redirect("/error");
          }

          // Step 2: Insert into company_members with company_id
          const { error: companyMemberError} = await supabase.from("company_members").insert({
            id,
            email,
            role,
            name: full_name,
            company_id: companyData.id, // now using actual ID from DB
          });

             if (companyMemberError ) {
            console.error("Failed to insert company member table:", companyMemberError);
            return redirect("/error");
          }

          // Step 3: Insert into profile table
          const { error: profileError} = await supabase.from("profiles").insert({
            id,
            email,
            role,
            name: full_name
          });
          
          if (profileError ) {
            console.error("Failed to insert profile:", profileError);
            return redirect("/error");
          }
        }
      }

      // redirect user to specified redirect URL or root of app
      redirect(next);
    }
  }

  // redirect the user to an error page with some instructions
  redirect("/error");
}
