import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aeryn" },
      {
        name: "description",
        content: "Reach the Aeryn atelier in east London for orders, fittings and press.",
      },
      { property: "og:title", content: "Contact — Aeryn" },
      { property: "og:description", content: "Reach the Aeryn atelier in east London." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="px-5 pb-32 pt-36 md:px-10 md:pt-52">
      <div className="mx-auto grid max-w-[80rem] gap-16 md:grid-cols-2">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">The atelier</h1>
          <div className="mt-12 space-y-8 text-sm leading-relaxed text-muted-foreground">
            <p>
              14 Redchurch Street
              <br />
              London E2 7DP
              <br />
              By appointment
            </p>
            <p>
              Client care — care@aeryn.example
              <br />
              Press — press@aeryn.example
            </p>
            <p className="text-xs">
              These details are placeholders. Send us the real address and addresses and we will set
              them in.
            </p>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-8"
        >
          {sent ? (
            <p className="text-sm text-primary">Received. We reply within two working days.</p>
          ) : (
            <>
              {[
                { id: "name", label: "Name", type: "text" },
                { id: "email", label: "Email", type: "email" },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="eyebrow">
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    required
                    className="mt-4 w-full border-b border-border bg-transparent pb-3 text-sm outline-none focus:border-primary"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="eyebrow">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="mt-4 w-full border-b border-border bg-transparent pb-3 text-sm outline-none focus:border-primary"
                />
              </div>
              <button type="submit" className="btn-quiet">
                Send
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
