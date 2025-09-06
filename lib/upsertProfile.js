//upsertProfile.js
import { supabase } from "./supabaseClient";

export async function upsertProfileFromAuthUser() {
  const {
    data: { user },
    error: getErr,
  } = await supabase.auth.getUser();
  if (getErr || !user) return;

  const full_name = user.user_metadata?.full_name ?? "";
  const phone = user.user_metadata?.phone ?? "";

  const { error: upsertErr } = await supabase
    .from("profiles")
    .upsert({ id: user.id, full_name, phone, updated_at: new Date().toISOString() }, { onConflict: "id" });

  if (upsertErr) console.error("profiles upsert failed:", upsertErr.message);
}
