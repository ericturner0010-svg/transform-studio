import { createFileRoute } from "@tanstack/react-router";

const pages: Record<string, { title: string; body: string[] }> = {
  privacy: {
    title: "Privacy",
    body: [
      "We collect only what is needed to fulfil an order and to keep you informed about releases.",
      "Data is never sold. You may ask us to remove your details at any time by writing to care@aeryn.example.",
      "This is placeholder copy for the demo. Send us your policy text and we will set it in.",
    ],
  },
  shipping: {
    title: "Shipping",
    body: [
      "Complimentary worldwide shipping, dispatched from London within two working days.",
      "United Kingdom, 1—2 days. Europe, 2—3 days. Rest of world, 3—5 days. Duties are prepaid.",
      "This is placeholder copy for the demo.",
    ],
  },
  returns: {
    title: "Returns",
    body: [
      "Thirty days from delivery, collected from your door at no cost.",
      "Pieces should be unworn with the atelier seal intact. Refunds are issued within five working days of receipt.",
      "This is placeholder copy for the demo.",
    ],
  },
};

export const Route = createFileRoute("/legal/$page")({
  loader: ({ params }) => ({ page: pages[params.page] ?? null }),
  head: ({ loaderData }) => {
    if (!loaderData?.page) {
      return { meta: [{ title: "Unavailable — Aeryn" }, { name: "robots", content: "noindex" }] };
    }
    const t = `${loaderData.page.title} — Aeryn`;
    return {
      meta: [
        { title: t },
        { name: "description", content: loaderData.page.body[0]! },
        { property: "og:title", content: t },
        { property: "og:description", content: loaderData.page.body[0]! },
      ],
    };
  },
  component: LegalPage,
});

function LegalPage() {
  const { page } = Route.useLoaderData();

  return (
    <div className="px-5 pb-32 pt-36 md:px-10 md:pt-52">
      <div className="mx-auto max-w-[52rem]">
        <p className="eyebrow">Information</p>
        <h1 className="mt-6 font-serif text-5xl md:text-6xl">{page?.title ?? "Unavailable"}</h1>
        <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
          {(page?.body ?? ["This page is not available."]).map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
