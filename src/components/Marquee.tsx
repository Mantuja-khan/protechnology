type MarqueeItem = string | { src: string; alt: string };

type MarqueeProps = {
  items: MarqueeItem[];
  direction?: "left" | "right";
  speed?: number; // seconds for one full cycle
};

export function Marquee({ items, direction = "left", speed = 30 }: MarqueeProps) {
  const loop = [...items, ...items];
  return (
    <div className="group relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
      <div
        className="flex w-max gap-4 group-hover:[animation-play-state:paused]"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {loop.map((item, i) => (
          <div
            key={i}
            className="flex h-24 min-w-[200px] items-center justify-center rounded-xl border border-border bg-card px-6 text-center text-sm md:text-base font-semibold text-primary shadow-sm"
          >
            {typeof item === "string" ? (
              item
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="max-h-16 max-w-[160px] object-contain"
              />
            )}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
