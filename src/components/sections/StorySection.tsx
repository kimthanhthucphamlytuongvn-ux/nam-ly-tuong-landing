import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { timeline } from "@/lib/data";

export function StorySection() {
  return (
    <section id="story" className="py-20">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-14 px-[22px] lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="eyebrow">Câu chuyện thương hiệu</p>
          <h2 className="mt-3 text-balance font-display text-[1.7rem] sm:text-[2.1rem] lg:text-[2.5rem]">
            Một hành trình bắt đầu từ một niềm tin giản đơn
          </h2>
          <ul className="mt-7 border-l border-glass-border">
            {timeline.map((item) => (
              <li key={item.year} className="relative py-0 pb-8 pl-7 last:pb-0">
                <span className="absolute left-[-6px] top-1 h-[11px] w-[11px] rounded-full bg-neon-gold shadow-glow-gold" />
                <span className="font-display text-[1.05rem] italic text-neon-green">
                  {item.year}
                </span>
                <p className="mt-1.5 text-[0.95rem] text-ink-soft">{item.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <GlassCard className="p-9">
            <p className="font-display text-[1.4rem] italic leading-[1.45] text-ink">
              &quot;Chất lượng sản phẩm là sinh mệnh của doanh nghiệp; lợi ích sức khỏe của người
              tiêu dùng là trung tâm của mọi sự sáng tạo.&quot;
            </p>
            <footer className="mt-5 text-[0.85rem] text-ink-dim">
              — Triết lý kinh doanh, Nấm Lý Tưởng
            </footer>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
