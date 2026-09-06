import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Story — Aeryn" },
      {
        name: "description",
        content:
          "A London atelier engineering garments that hold two silhouettes, made with British mills.",
      },
      { property: "og:title", content: "Story — Aeryn" },
      {
        property: "og:description",
        content: "A London atelier engineering garments that hold two silhouettes.",
      },
    ],
  }),
  component: Story,
});

function Story() {
  return (
    <div className="pb-32 pt-36 md:pt-52">
      <div className="mx-auto max-w-[70rem] px-5 md:px-10">
        <p className="eyebrow">Story</p>
        <h1 className="mt-6 font-serif text-5xl leading-tight md:text-7xl">
          Made once. Worn as two.
        </h1>
        <p className="mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground">
          The house began with a single question: why should a garment hold only one shape. Our
          patterns are drawn twice — once for each silhouette — then resolved into a single cut.
        </p>
      </div>

      <div className="mt-24 aspect-[16/9] w-full overflow-hidden">
        <img
          src={hero}
          alt="Atelier study of a garment in motion"
          loading="lazy"
          width={1600}
          height={1008}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mx-auto mt-24 grid max-w-[70rem] gap-16 px-5 md:grid-cols-3 md:px-10">
        {[
          {
            t: "British craft",
            b: "Cloth from mills in Yorkshire, Somerset and the Scottish Borders. Cutting and finishing in our east London atelier, by a team of nine.",
          },
          {
            t: "Structural change",
            b: "No detachable trims or novelty fastenings. Transformation is built into the pattern: released hems, hidden seams, weighted drape.",
          },
          {
            t: "Versatility as ethics",
            b: "Two garments in one halves what a wardrobe needs. We make in limited runs and repair for the life of the piece.",
          },
        ].map((c, i) => (
          <Reveal key={c.t} delay={i * 120}>
            <h2 className="font-serif text-2xl">{c.t}</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{c.b}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
