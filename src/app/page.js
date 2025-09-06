//page.js
import React from "react";
import Homepage from "./pages/homepage/page";

export default function Page() {
  console.log(process.env.NEXT_PUBLIC_SUPABASE_URL);
  return <Homepage />;
}
