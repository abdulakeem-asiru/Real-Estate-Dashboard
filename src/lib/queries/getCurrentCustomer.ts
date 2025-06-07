import { createClient } from "@/utils/supabase/client";

export const getCurrentCustomer = async () => {
  const supabase = createClient();

  // Get currently authenticated user
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) throw new Error("No user is logged in");

  // Query the customers table using user ID
  const { data, error } = await supabase
    .from("customers")
    .select("*")
    .eq("id", user.id) 
    .single();

  if (error) throw new Error(error.message);
  return data;
};
