//signin page
"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { FaLock, FaLockOpen, FaGoogle, FaDiscord } from "react-icons/fa";
import { upsertProfileFromAuthUser } from "../lib/upsertProfile";
// import { useRouter } from "next/navigation";

export default function SignIn() {
  const [oauthLoading, setOauthLoading] = useState(null); // "google" | "discord" | null

  const handleOAuth = async (provider) => {
    try {
      setServerMsg("");
      setOauthLoading(provider);
      const { error } = await supabase.auth.signInWithOAuth({
        provider, // "google" | "discord"
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
          scopes: provider === "google" ? "openid email profile" : "identify email",
        },
      });
      if (error) setError("root", { message: error.message });
    } catch (e) {
      setError("root", { message: e?.message ?? "OAuth failed" });
    } finally {
      setOauthLoading(null);
    }
  };

  // const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
    setFocus,
  } = useForm();

  const [serverMsg, setServerMsg] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);

  const inputBase =
    "w-full rounded-lg border bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 outline-none focus:border-neutral-900 hover:border-neutral-900 transition-all";

  const onSubmit = async (values) => {
    setServerMsg("");
    const { email, password } = values;

    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("root", { message: error.message });
      return;
    }

    if (data?.user) {
      await upsertProfileFromAuthUser();
      setServerMsg("Signed in successfully!");
      reset({ email: "", password: "" });
      // router.push("/"); // optional redirect
    }
  };
  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-white">
      <div className="mb-6">
        <Image alt="Logo" src="/logo.png" width={50} height={50} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm rounded-2xl p-6 shadow-md border">
        <h1 className="text-3xl font-semibold mb-5 text-black text-center">Log in to your account</h1>

        {/* Email */}
        <label className="block mb-2 text-sm font-medium text-black" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="youremail@gmail.com"
          className={`${inputBase} ${errors.email ? "border-red-500" : "border-neutral-300"}`}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Enter a valid email",
            },
          })}
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}

        {/* Password */}
        <label className="block mt-4 mb-2 text-sm font-medium text-black" htmlFor="password">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            type={passwordShow ? "text" : "password"}
            placeholder="••••••••"
            className={`${inputBase} ${errors.password ? "border-red-500" : "border-neutral-300"} pr-11`}
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "At least 6 characters" },
            })}
          />
          <button
            type="button"
            aria-label={passwordShow ? "Hide password" : "Show password"}
            onClick={() => setPasswordShow((s) => !s)}
            className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-md p-2 text-neutral-600 hover:bg-neutral-100 focus:outline-none"
            title={passwordShow ? "Hide password" : "Show password"}
          >
            {passwordShow ? <FaLockOpen /> : <FaLock />}
          </button>
        </div>
        {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}

        {/* Root/server error */}
        {errors.root && <p className="mt-3 text-sm text-red-600">{errors.root.message}</p>}

        {/* Server message */}
        {serverMsg && <p className="mt-3 text-sm text-emerald-700">{serverMsg}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-6 w-full rounded-lg bg-black text-white py-2 font-medium disabled:opacity-60 
          hover:scale-103 transition-all cursor-pointer"
        >
          {isSubmitting ? "Signing in..." : "Log In"}
        </button>

        {/* Divider */}
        <div className="my-2 flex items-center gap-3">
          <div className="h-px flex-1 bg-neutral-200" />
          <span className=" text-neutral-500">or</span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>

        {/* Social OAuth */}
        <div className="grid grid-cols-2 gap-3  items-center content-center justify-center justify-items-center">
          <button
            type="button"
            onClick={() => handleOAuth("google")}
            disabled={oauthLoading !== null}
            className="flex items-center justify-center gap-2 rounded-lg border border-neutral-300 py-2 hover:bg-neutral-50 disabled:opacity-60 cursor-pointer hover:scale-105 transition-all w-20"
            title="Continue with Google"
          >
            <FaGoogle color="black" />
          </button>
          <button
            type="button"
            onClick={() => handleOAuth("discord")}
            disabled={oauthLoading !== null}
            className="flex items-center justify-center gap-2 rounded-lg border border-neutral-300 py-2 hover:bg-neutral-50 disabled:opacity-60 cursor-pointer hover:scale-105 transition-all w-20"
            title="Continue with Discord"
          >
            <FaDiscord color="black" />
          </button>
        </div>

        <p className="mt-4 text-sm text-center text-black">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="underline text-gray-500">
            Create one
          </Link>
        </p>

        <p className="mt-2  text-sm text-center text-gray-500">
          <Link href="/forgot-password" className="underline">
            Forgot your password?
          </Link>
        </p>
      </form>
    </div>
  );
}
