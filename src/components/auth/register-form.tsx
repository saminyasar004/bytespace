"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { AuthShell, AuthSwitch } from "@/components/auth/auth-shell";
import { authCopy } from "@/lib/data";
import { useAuthStore } from "@/store/use-auth-store";

const copy = authCopy.register;

const field =
  "h-12 w-full rounded-[10px] border border-line-soft bg-white px-5 text-[16px] text-ink outline-none transition-colors placeholder:text-muted focus:border-brand";

export function RegisterForm() {
  const router = useRouter();
  const signIn = useAuthStore((s) => s.signIn);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
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
    signIn({ name: form.name.trim(), email: form.email });
    router.push("/search");
  }

  return (
    <AuthShell
      banner="/assets/sign-up-banner.svg"
      bannerAlt="Sign up illustration"
      bannerTitle={copy.bannerTitle}
      bannerBody={copy.bannerBody}
    >
      <p className="text-[15px] font-medium text-brand">{copy.eyebrow}</p>
      <h1 className="heading-lg mt-2 text-[40px] text-ink">
        {copy.heading}
        <br />
        {copy.headingAccent}
      </h1>

      <form onSubmit={onSubmit} className="mt-12" noValidate>
        {error && (
          <p role="alert" className="mb-6 text-[14px] text-red-600">
            {error}
          </p>
        )}

        <div className="space-y-11">
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
                className="absolute right-4 top-1/2 grid h-8 w-8 -translate-y-1/2 cursor-pointer place-items-center text-ink-700 transition-colors hover:text-brand"
                aria-label={show ? "Hide password" : "Show password"}
              >
                {show ? <EyeOff className="h-5 w-5" aria-hidden /> : <Eye className="h-5 w-5" aria-hidden />}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="h-12 cursor-pointer rounded-full bg-lime px-9 text-[16px] font-medium text-ink-900 transition-colors hover:bg-lime-dark"
          >
            {copy.submit}
          </button>
        </div>
      </form>

      <div className="mt-16">
        <AuthSwitch prompt={copy.switchPrompt} action={copy.switchAction} href="/login" />
      </div>
    </AuthShell>
  );
}
