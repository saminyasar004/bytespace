"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { AuthShell, AuthSwitch } from "@/components/auth/auth-shell";
import { authCopy } from "@/lib/data";
import { useAuthStore } from "@/store/use-auth-store";

const copy = authCopy.login;

export function LoginForm() {
  const router = useRouter();
  const signIn = useAuthStore((s) => s.signIn);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Your password must be at least 6 characters.");
      return;
    }
    const name = email
      .split("@")[0]
      .replace(/[._-]+/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    signIn({ name, email });
    router.push("/search");
  }

  const field =
    "h-13 w-full rounded-full border border-line bg-white px-6 text-[16px] text-ink outline-none transition-colors placeholder:text-muted focus:border-brand";

  return (
    <AuthShell
      banner="/assets/signin-banner.svg"
      bannerAlt="Sign in illustration"
      bannerTitle={copy.bannerTitle}
      bannerBody={copy.bannerBody}
    >
      <p className="mt-12 text-[16px] text-ink-500">{copy.eyebrow}</p>
      <h1 className="heading-lg mt-2 text-[36px] text-ink">{copy.heading}</h1>

      <form onSubmit={onSubmit} className="mt-10" noValidate>
        {error && (
          <p role="alert" className="mb-5 text-[14px] text-red-600">
            {error}
          </p>
        )}

        <div className="space-y-6">
          <div>
            <label htmlFor="login-email" className="mb-2 block text-[15px] text-ink-500">
              Email
            </label>
            <input
              id="login-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              placeholder={copy.placeholder.email}
              autoComplete="email"
              className={field}
            />
          </div>

          <div>
            <label htmlFor="login-password" className="mb-2 block text-[15px] text-ink-500">
              Password
            </label>
            <div className="relative">
              <input
                id="login-password"
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                placeholder={copy.placeholder.password}
                autoComplete="current-password"
                className={`${field} pr-14`}
              />
              <button
                type="button"
                onClick={() => setShow((v) => !v)}
                className="absolute right-5 top-1/2 grid h-6 w-6 -translate-y-1/2 cursor-pointer place-items-center text-ink-700"
                aria-label={show ? "Hide password" : "Show password"}
              >
                {show ? <EyeOff className="h-5 w-5" aria-hidden /> : <Eye className="h-5 w-5" aria-hidden />}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <label className="flex cursor-pointer items-center gap-2 text-[15px] text-ink-500">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="peer sr-only"
            />
            <span
              aria-hidden
              className="grid h-5 w-5 place-items-center rounded-[5px] border border-line transition-colors peer-checked:border-brand peer-checked:bg-brand"
            >
              {remember && <span className="h-2 w-2 rotate-45 border-b-2 border-r-2 border-surface" />}
            </span>
            Remember me
          </label>
          <a href="#" className="text-[15px] text-ink-500 transition-colors hover:text-brand">
            Forgot password?
          </a>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="h-12 cursor-pointer rounded-full bg-brand px-10 text-[16px] font-medium text-surface transition-colors hover:bg-brand-dark"
          >
            {copy.submit}
          </button>
        </div>
      </form>

      <div className="mt-10">
        <AuthSwitch prompt={copy.switchPrompt} action={copy.switchAction} href="/register" />
      </div>
    </AuthShell>
  );
}
