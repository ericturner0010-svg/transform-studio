import { useState } from "react";

export function TransformSlider({
  before,
  after,
  beforeLabel = "Shirt",
  afterLabel = "Dress",
}: {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const [pos, setPos] = useState(50);

  return (
    <div className="w-full">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface select-none md:aspect-[16/10]">
        <img
          src={before}
          alt={beforeLabel}
          loading="lazy"
          width={900}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
        >
          <img
            src={after}
            alt={afterLabel}
            loading="lazy"
            width={900}
            height={1200}
            className="h-full w-full object-cover"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-primary/70"
          style={{ left: `${pos}%` }}
        />
        <span className="pointer-events-none absolute bottom-5 left-5 text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
          {beforeLabel}
        </span>
        <span className="pointer-events-none absolute bottom-5 right-5 text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
          {afterLabel}
        </span>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          aria-label="Drag to transform"
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <p className="mt-5 text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
        Drag to transform
      </p>
    </div>
  );
}
