"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../../lib/supabaseClient";
import { upsertProfileFromAuthUser } from "../../../../lib/upsertProfile";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const url = new URL(window.location.href);
      const code = url.searchParams.get("code");
      console.log("callback code param:", code);

      // If no session yet, try to exchange the code for a session
      const { data: sess } = await supabase.auth.getSession();

      if (!sess.session) {
        const { error } = await supabase.auth.exchangeCodeForSession(window.location.href);
        if (error) {
          console.error("OAuth exchange failed:", error.message);
          console.log("Origin:", window.location.origin);
          console.log("LocalStorage keys:", Object.keys(window.localStorage));
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
