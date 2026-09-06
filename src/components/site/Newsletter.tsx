import { useState } from "react";

export function Newsletter({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setDone(true);
      }}
      className={compact ? "max-w-md" : "mx-auto max-w-xl text-center"}
    >
      {!compact && (
        <>
          <p className="eyebrow">The list</p>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl">First form, first access.</h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Collections are released in limited runs. The list is notified before anyone else.
          </p>
        </>
      )}
      {compact && <p className="eyebrow">Newsletter</p>}

      {done ? (
        <p className={`text-sm text-primary ${compact ? "mt-6" : "mt-10"}`}>
          You are on the list. We will be in touch.
        </p>
      ) : (
        <div
          className={`flex items-center gap-4 border-b border-border pb-3 ${compact ? "mt-6" : "mt-10"}`}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            aria-label="Email address"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          <button
            type="submit"
            className="shrink-0 text-[0.7rem] uppercase tracking-[0.24em] text-primary"
          >
            Join
          </button>
        </div>
      )}
    </form>
  );
}
