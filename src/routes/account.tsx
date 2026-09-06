import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "Account — Aeryn" },
      { name: "description", content: "Sign in to your Aeryn account to view orders and fittings." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Account — Aeryn" },
      { property: "og:description", content: "Sign in to your Aeryn account." },
    ],
  }),
  component: Account,
});

function Account() {
  return (
    <div className="px-5 pb-32 pt-36 md:px-10 md:pt-52">
      <div className="mx-auto max-w-md">
        <p className="eyebrow">Account</p>
        <h1 className="mt-6 font-serif text-5xl">Sign in</h1>
        <div className="mt-12 space-y-8">
          <div>
            <label htmlFor="acc-email" className="eyebrow">
              Email
            </label>
            <input
              id="acc-email"
              type="email"
              className="mt-4 w-full border-b border-border bg-transparent pb-3 text-sm outline-none focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="acc-pass" className="eyebrow">
              Password
            </label>
            <input
              id="acc-pass"
              type="password"
              className="mt-4 w-full border-b border-border bg-transparent pb-3 text-sm outline-none focus:border-primary"
            />
          </div>
          <button className="btn-quiet w-full" disabled>
            Accounts open at launch
          </button>
        </div>
      </div>
    </div>
  );
}
