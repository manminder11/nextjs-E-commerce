import { supabase } from "./lib/supabaseClient";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_SUPABASE_URL);

  return <div>hi i am main</div>;
}
