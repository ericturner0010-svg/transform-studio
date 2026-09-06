import p1a from "@/assets/p1-a.jpg";
import p1b from "@/assets/p1-b.jpg";
import p2a from "@/assets/p2-a.jpg";
import p2b from "@/assets/p2-b.jpg";
import p3a from "@/assets/p3-a.jpg";
import p3b from "@/assets/p3-b.jpg";
import p4a from "@/assets/p4-a.jpg";
import p4b from "@/assets/p4-b.jpg";
import p5a from "@/assets/p5-a.jpg";
import p5b from "@/assets/p5-b.jpg";
import p6a from "@/assets/p6-a.jpg";
import p6b from "@/assets/p6-b.jpg";

export type Product = {
  slug: string;
  name: string;
  price: number;
  tag: string;
  line: string;
  detail: string;
  images: [string, string];
  fabric: string;
};

export const products: Product[] = [
  {
    slug: "meridian",
    name: "Meridian",
    price: 480,
    tag: "shirt ↔ dress",
    line: "A poplin shirt that releases into a full-length column.",
    detail:
      "Cut from Somerset-woven cotton poplin. Two concealed seams release the hem, extending the body into a floor-skimming shirt dress. Worn either way, the collar remains the anchor.",
    images: [p1a, p1b],
    fabric: "100% long-staple cotton poplin, woven in Somerset",
  },
  {
    slug: "solstice",
    name: "Solstice",
    price: 1250,
    tag: "coat ↔ cape",
    line: "A tailored trench that unbuttons into a wool cape.",
    detail:
      "Double-faced Yorkshire wool, undercollar hand-felled. The sleeves detach at the shoulder seam and the body falls open into a cape with a single fastening.",
    images: [p2a, p2b],
    fabric: "Double-faced wool, milled in Yorkshire",
  },
  {
    slug: "verge",
    name: "Verge",
    price: 620,
    tag: "slip ↔ jumpsuit",
    line: "A bias slip that resolves into wide-leg silk trousers.",
    detail:
      "Cut on the true bias in sand-washed silk. The skirt divides along an interior seam to form a wide, fluid leg. Nothing is added; nothing is removed.",
    images: [p3a, p3b],
    fabric: "19mm sand-washed silk crêpe de chine",
  },
  {
    slug: "halcyon",
    name: "Halcyon",
    price: 890,
    tag: "blouse ↔ gown",
    line: "A champagne wrap blouse that extends to a full evening line.",
    detail:
      "Duchesse satin with a hand-finished internal tie. Releasing the waist ties drops the concealed under-panel into a floor-length skirt.",
    images: [p4a, p4b],
    fabric: "Silk duchesse satin, finished in London",
  },
  {
    slug: "ardent",
    name: "Ardent",
    price: 750,
    tag: "blazer ↔ dress",
    line: "A pinstripe blazer that lengthens into a belted midi.",
    detail:
      "Suiting cloth with canvassed fronts. The vents unfasten to release a pleated lower panel, belted at the natural waist.",
    images: [p5a, p5b],
    fabric: "Super 120s wool pinstripe, woven in Huddersfield",
  },
  {
    slug: "anneal",
    name: "Anneal",
    price: 540,
    tag: "poncho ↔ dress",
    line: "A cashmere poncho that closes into a fitted knit dress.",
    detail:
      "Fully fashioned in Scottish cashmere. Side seams fasten with covered hooks, drawing the open drape into a narrow long-sleeve dress.",
    images: [p6a, p6b],
    fabric: "Two-ply Scottish cashmere",
  },
];

export const gbp = (n: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 0,
  }).format(n);

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
