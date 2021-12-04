import { createClient } from "@supabase/supabase-js";

const supabaseUrlOne = process.env.REACT_APP_SUPABASE_URL_ONE;
const supabaseAnonKeyOne = process.env.REACT_APP_SUPABASE_ANON_KEY_ONE;

const supabaseUrlTwo = process.env.REACT_APP_SUPABASE_URL_TWO;
const supabaseAnonKeyTwo = process.env.REACT_APP_SUPABASE_ANON_KEY_TWO;

export const supabaseOne = createClient(supabaseUrlOne, supabaseAnonKeyOne);
export const supabaseTwo = createClient(supabaseUrlTwo, supabaseAnonKeyTwo);
