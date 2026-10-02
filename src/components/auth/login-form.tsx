"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { AuthShell, AuthSwitch } from "@/components/auth/auth-shell";
import { AuthDivider, SocialButtons } from "@/components/auth/social-buttons";
import { authCopy } from "@/lib/data";
import { useAuthStore } from "@/store/use-auth-store";

const copy = authCopy.login;

const field =
  "h-12 w-full rounded-[10px] border border-line-soft bg-white px-5 text-[16px] text-ink outline-none transition-colors placeholder:text-muted focus:border-brand";

export function LoginForm() {
  const router = useRouter();
  const signIn = useAuthStore((s) => s.signIn);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  return (
    <AuthShell
      banner="/assets/signin-banner.svg"
      bannerAlt="Sign in illustration"
      bannerTitle={copy.bannerTitle}
      bannerBody={copy.bannerBody}
    >
      <p className="text-[15px] font-medium text-brand">{copy.eyebrow}</p>
      <h1 className="heading-lg mt-2 text-[40px] text-ink">{copy.heading}</h1>

      <form onSubmit={onSubmit} className="mt-12" noValidate>
        {error && (
          <p role="alert" className="mb-6 text-[14px] text-red-600">
            {error}
          </p>
        )}

        <div className="space-y-8">
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
                className="absolute right-4 top-1/2 grid h-8 w-8 -translate-y-1/2 cursor-pointer place-items-center text-ink-700 transition-colors hover:text-brand"
                aria-label={show ? "Hide password" : "Show password"}
              >
                {show ? <EyeOff className="h-5 w-5" aria-hidden /> : <Eye className="h-5 w-5" aria-hidden />}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-end">
          <button
            type="submit"
            className="h-12 cursor-pointer rounded-full bg-lime px-9 text-[16px] font-medium text-ink-900 transition-colors hover:bg-lime-dark"
          >
            {copy.submit}
          </button>
        </div>
      </form>

      <div className="mt-14">
        <AuthDivider label={copy.divider} />
      </div>

      <div className="mt-12">
        <SocialButtons />
      </div>

      <div className="mt-14">
        <AuthSwitch prompt={copy.switchPrompt} action={copy.switchAction} href="/register" />
      </div>
    </AuthShell>
  );
}
