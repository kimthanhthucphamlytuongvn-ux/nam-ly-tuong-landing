import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { StatTile } from "@/components/ui/StatTile";
import { heroStats, CONTACT } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative pb-10 pt-16">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-[22px] lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <Reveal>
          <p className="eyebrow">Sống khỏe mỗi ngày</p>
          <h1 className="mt-4 text-balance font-display text-[2.3rem] leading-[1.08] sm:text-[2.9rem] lg:text-[3.7rem]">
            Yên tâm từ cây nấm,{" "}
            <em className="bg-grad-accent bg-clip-text italic text-transparent">trọn vẹn</em>{" "}
            mỗi bữa ăn
          </h1>
          <p className="mt-5 max-w-[52ch] text-[1.12rem] text-ink-soft">
            Năm 2012, trước nỗi trăn trở về thực phẩm mập mờ nguồn gốc, chị Vũ Hoài Thu rời vị
            trí quản lý cấp cao để đi tìm một chỗ đứng xứng đáng cho cây nấm sạch Việt Nam. Hơn
            một thập kỷ sau, Nấm Lý Tưởng là đơn vị tiên phong làm &quot;chứng minh thư&quot; truy
            xuất nguồn gốc cho từng cây nấm — để mỗi bữa ăn của gia đình bạn đều an tâm trọn vẹn.
          </p>
          <div className="mt-7 flex flex-wrap gap-3.5">
            <Button href={`tel:${CONTACT.hotlinePrimary.tel}`}>
              Hotline {CONTACT.hotlinePrimary.display}
            </Button>
            <Button href="#products" variant="outline">
              Xem sản phẩm
            </Button>
          </div>
          <div className="mt-11 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <StatTile key={stat.label} {...stat} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <GlassCard className="relative mx-auto aspect-square max-w-[440px] p-7" aria-hidden="true">
            <svg viewBox="0 0 200 200" className="h-full w-full">
              <defs>
                <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="var(--neon-green)" />
                  <stop offset="1" stopColor="var(--neon-gold)" />
                </linearGradient>
              </defs>
              <g transform="translate(38,26) scale(2.0)">
                <path
                  fill="url(#heroGrad)"
                  d="M32 6C15 6 8 20 8 28c0 3 2 5 5 5h38c3 0 5-2 5-5 0-8-7-22-24-22Z"
                />
                <path
                  fill="url(#heroGrad)"
                  opacity={0.55}
                  d="M25 33h14l-2 20a5 5 0 0 1-5 5h0a5 5 0 0 1-5-5l-2-20Z"
                />
              </g>
              <g transform="translate(122,120) scale(0.9)" style={{ color: "var(--neon-gold)" }}>
                <path
                  fill="currentColor"
                  d="M56 8C30 8 10 26 10 48c0 3.3 2.7 6 6 6 22 0 40-20 40-46Z"
                />
              </g>
            </svg>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
