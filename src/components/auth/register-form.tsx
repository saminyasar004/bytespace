"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { AuthShell, AuthSwitch } from "@/components/auth/auth-shell";
import { authCopy } from "@/lib/data";
import { useAuthStore } from "@/store/use-auth-store";

const copy = authCopy.register;

export function RegisterForm() {
  const router = useRouter();
  const signIn = useAuthStore((s) => s.signIn);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [agreed, setAgreed] = useState(false);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setError("");
  };

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.name.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }
    if (!form.email.includes("@")) {
      setError("Enter a valid email address.");
      return;
    }
    if (form.password.length < 6) {
      setError("Your password must be at least 6 characters.");
      return;
    }
    if (!agreed) {
      setError("Please accept the terms to continue.");
      return;
    }
    signIn({ name: form.name.trim(), email: form.email });
    router.push("/search");
  }

  const field =
    "h-13 w-full rounded-full border border-line bg-white px-6 text-[16px] text-ink outline-none transition-colors placeholder:text-muted focus:border-brand";

  return (
    <AuthShell
      banner="/assets/sign-up-banner.svg"
      bannerAlt="Sign up illustration"
      bannerTitle={copy.bannerTitle}
      bannerBody={copy.bannerBody}
    >
      <p className="mt-12 text-[16px] text-ink-500">{copy.eyebrow}</p>
      <h1 className="heading-lg mt-2 text-[36px] text-ink">
        {copy.heading}
        <br />
        {copy.headingAccent}
      </h1>

      <form onSubmit={onSubmit} className="mt-8" noValidate>
        {error && (
          <p role="alert" className="mb-5 text-[14px] text-red-600">
            {error}
          </p>
        )}

        <div className="space-y-5">
          <div>
            <label htmlFor="reg-name" className="mb-2 block text-[15px] text-ink-500">
              Full Name
            </label>
            <input
              id="reg-name"
              type="text"
              value={form.name}
              onChange={set("name")}
              placeholder={copy.placeholder.name}
              autoComplete="name"
              className={field}
            />
          </div>

          <div>
            <label htmlFor="reg-email" className="mb-2 block text-[15px] text-ink-500">
              Email
            </label>
            <input
              id="reg-email"
              type="email"
              value={form.email}
              onChange={set("email")}
              placeholder={copy.placeholder.email}
              autoComplete="email"
              className={field}
            />
          </div>

          <div>
            <label htmlFor="reg-password" className="mb-2 block text-[15px] text-ink-500">
              Password
            </label>
            <div className="relative">
              <input
                id="reg-password"
                type={show ? "text" : "password"}
                value={form.password}
                onChange={set("password")}
                placeholder={copy.placeholder.password}
                autoComplete="new-password"
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

        <label className="mt-5 flex cursor-pointer items-start gap-3 text-[14px] leading-5 text-ink-500">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => {
              setAgreed(e.target.checked);
              setError("");
            }}
            className="peer sr-only"
          />
          <span
            aria-hidden
            className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-[5px] border border-line transition-colors peer-checked:border-brand peer-checked:bg-brand"
          >
            {agreed && <span className="h-2 w-2 rotate-45 border-b-2 border-r-2 border-surface" />}
          </span>
          <span>
            I agree to the{" "}
            <a href="#" className="text-brand hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-brand hover:underline">
              Privacy Policy
            </a>
            .
          </span>
        </label>

        <div className="mt-7 flex justify-end">
          <button
            type="submit"
            className="h-12 cursor-pointer rounded-full bg-brand px-10 text-[16px] font-medium text-surface transition-colors hover:bg-brand-dark"
          >
            {copy.submit}
          </button>
        </div>
      </form>

      <div className="mt-8">
        <AuthSwitch prompt={copy.switchPrompt} action={copy.switchAction} href="/login" />
      </div>
    </AuthShell>
  );
}
