function FacebookIcon() {
  return (
    <svg viewBox="0 0 320 512" className="h-6 w-6" aria-hidden>
      <path
        fill="currentColor"
        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H297V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
      />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-6 w-6" aria-hidden>
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}

const providers = [
  { id: "facebook", label: "Continue with Facebook", Icon: FacebookIcon },
  { id: "google", label: "Continue with Google", Icon: GoogleIcon },
];

/** Social sign-in buttons shown under the "or" divider on the login page. */
export function SocialButtons() {
  return (
    <div className="flex items-center justify-center gap-5">
      {providers.map(({ id, label, Icon }) => (
        <button
          key={id}
          type="button"
          aria-label={label}
          title={label}
          className="grid h-17 w-17 cursor-pointer place-items-center rounded-[12px] border border-line-soft bg-white text-ink-900 transition-colors hover:border-line hover:bg-surface"
        >
          <Icon />
        </button>
      ))}
    </div>
  );
}

/** "or" rule that separates the credentials form from the social buttons. */
export function AuthDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-6">
      <span className="h-px flex-1 bg-line-soft" />
      <span className="text-[15px] text-muted">{label}</span>
      <span className="h-px flex-1 bg-line-soft" />
    </div>
  );
}
