import { createFileRoute, Link } from "@tanstack/react-router";
import { products, gbp } from "@/lib/products";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Collection — Aeryn" },
      {
        name: "description",
        content: "Six convertible pieces, cut from British cloth and made in limited runs.",
      },
      { property: "og:title", content: "Collection — Aeryn" },
      {
        property: "og:description",
        content: "Six convertible pieces, cut from British cloth and made in limited runs.",
      },
    ],
  }),
  component: Shop,
});

function Shop() {
  return (
    <div className="px-5 pb-32 pt-36 md:px-10 md:pt-52">
      <div className="mx-auto max-w-[110rem]">
        <p className="eyebrow">Collection</p>
        <h1 className="mt-6 max-w-2xl font-serif text-5xl leading-tight md:text-7xl">
          Pieces that hold two silhouettes.
        </h1>
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Each garment is made to order in limited runs. Hover, or tap, to see the second form.
        </p>

        <div className="mt-20 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 100}>
              <Link to="/product/$slug" params={{ slug: p.slug }} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-surface">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    loading="lazy"
                    width={900}
                    height={1200}
                    className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[900ms] group-hover:opacity-0"
                  />
                  <img
                    src={p.images[1]}
                    alt={`${p.name}, second form`}
                    loading="lazy"
                    width={900}
                    height={1200}
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-[900ms] group-hover:opacity-100"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-6">
                  <p className="font-serif text-2xl">{p.name}</p>
                  <p className="text-sm text-muted-foreground">{gbp(p.price)}</p>
                </div>
                <p className="mt-2 text-[0.65rem] uppercase tracking-[0.24em] text-primary">
                  {p.tag}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{p.line}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
