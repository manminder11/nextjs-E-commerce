"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";
import { upsertProfileFromAuthUser } from "../../lib/upsertProfile";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      // If no session yet, exchange the code in the URL for a session:
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        const { error } = await supabase.auth.exchangeCodeForSession(window.location.href);
        if (error) {
          console.error("OAuth exchange failed:", error.message);

          return;
        }
      }

      await upsertProfileFromAuthUser();

      router.replace("/");
    })();
  }, [router]);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <p className="text-sm text-neutral-600">Finishing sign-in…</p>
    </div>
  );
}
