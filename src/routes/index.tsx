import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { products, gbp } from "@/lib/products";
import { Reveal } from "@/components/site/Reveal";
import { TransformSlider } from "@/components/site/TransformSlider";
import { Newsletter } from "@/components/site/Newsletter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aeryn — One Garment. Infinite Form." },
      {
        name: "description",
        content:
          "British atelier making transformative garments. A shirt becomes a dress; a coat becomes a cape.",
      },
      { property: "og:title", content: "Aeryn — One Garment. Infinite Form." },
      {
        property: "og:description",
        content: "Transformative garments, made in Britain. One piece, held in two forms.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = products[0]!;

  return (
    <>
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <img
          src={hero}
          alt="A garment caught mid-transformation"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/30" />
        <div className="relative mx-auto w-full max-w-[110rem] px-5 pb-20 md:px-10 md:pb-28">
          <p className="eyebrow">Autumn — Winter</p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] md:text-8xl">
            One Garment.
            <br />
            Infinite Form.
          </h1>
          <div className="mt-12">
            <Link to="/shop" className="btn-quiet">
              View the collection
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-28 md:px-10 md:py-44">
        <div className="mx-auto grid max-w-[80rem] gap-16 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow">The house</p>
          </Reveal>
          <div className="space-y-8">
            <Reveal>
              <h2 className="font-serif text-3xl leading-snug md:text-5xl">
                A wardrobe measured in forms, not in pieces.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                Aeryn is a London atelier working with British mills. Each piece is engineered to
                hold two silhouettes — a shirt that lengthens into a dress, a coat that opens into a
                cape. The change is structural, not decorative: concealed seams, released hems,
                weighted drape.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                Versatility is our sustainability. Fewer garments, worn more often, cut from cloth
                that is intended to last decades. Every piece is made in limited runs, finished by
                hand, and traceable to the mill that wove it.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <Link to="/story" className="rule-link">
                Read the story
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-border px-5 py-28 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[100rem] items-center gap-16 md:grid-cols-2">
          <Reveal>
            <TransformSlider before={featured.images[0]} after={featured.images[1]} />
          </Reveal>
          <Reveal delay={120} className="md:pl-10">
            <p className="eyebrow">The transform</p>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl">{featured.name}</h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              {featured.detail}
            </p>
            <p className="mt-8 text-sm">{gbp(featured.price)}</p>
            <div className="mt-10">
              <Link
                to="/product/$slug"
                params={{ slug: featured.slug }}
                className="btn-quiet"
              >
                View piece
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-[110rem]">
          <Reveal>
            <div className="flex items-end justify-between">
              <h2 className="font-serif text-4xl md:text-6xl">The collection</h2>
              <Link to="/shop" className="rule-link hidden md:inline-block">
                All pieces
              </Link>
            </div>
          </Reveal>
          <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 100}>
                <Link
                  to="/product/$slug"
                  params={{ slug: p.slug }}
                  className="group block"
                >
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
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border px-5 py-28 md:px-10 md:py-40">
        <Reveal>
          <Newsletter />
        </Reveal>
      </section>
    </>
  );
}
