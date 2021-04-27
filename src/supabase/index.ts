import { createClient } from "@supabase/supabase-js";

let supabase;
if (
  process?.env?.REACT_APP_SUPABASE_URL &&
  process?.env?.REACT_APP_SUPABASE_KEY
) {
  supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL,
    process.env.REACT_APP_SUPABASE_KEY
  );
}

export default supabase;
