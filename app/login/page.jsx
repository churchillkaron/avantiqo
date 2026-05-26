"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function LoginPage() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleLogin(e) {
    e.preventDefault();

    setLoading(true);

    try {
      const {
        data,
        error,
      } =
        await supabase.auth.signInWithPassword(
          {
            email,
            password,
          }
        );

      if (error) {
        alert(error.message);
        return;
      }

      const response =
        await fetch(
          "/api/admin/login",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              email,
            }),
          }
        );

      const result =
        await response.json();

      if (result.success) {
        window.location.href =
          result.redirect;
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050407] p-8 text-white">

      <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">

        <div className="mb-8">

          <div className="text-4xl font-bold">
            Platform Login
          </div>

          <div className="mt-3 text-zinc-500">
            Access your organization
            workspace securely
          </div>

        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          <div>

            <div className="mb-2 text-sm text-zinc-400">
              Email
            </div>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 outline-none transition focus:border-[#d7b66a]"
            />

          </div>

          <div>

            <div className="mb-2 text-sm text-zinc-400">
              Password
            </div>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 outline-none transition focus:border-[#d7b66a]"
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-gradient-to-r from-[#d7b66a] to-[#7c3aed] px-5 py-4 font-semibold text-black transition hover:opacity-90 disabled:opacity-50"
          >
            {loading
              ? "Signing In..."
              : "Login"}
          </button>

        </form>

      </div>

    </main>
  );
}
