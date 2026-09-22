import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { values } from "@/lib/data";

export function ValuesSection() {
  return (
    <section id="values" className="py-20">
      <div className="mx-auto max-w-[1180px] px-[22px]">
        <Reveal className="mb-11 max-w-[660px]">
          <p className="eyebrow">Giá trị cốt lõi</p>
          <h2 className="mt-3 text-balance font-display text-[1.7rem] sm:text-[2.1rem] lg:text-[2.5rem]">
            Nguyên tắc 4S
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-[18px] md:grid-cols-4">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.06}>
              <GlassCard className="h-full p-[26px]">
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-grad-accent font-display text-[1.3rem] font-bold text-[#12200F] shadow-glow-green">
                  {value.letter}
                </div>
                <h3 className="mt-4 text-[1.08rem]">{value.title}</h3>
                <p className="mt-2 text-[0.88rem] text-ink-dim">{value.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
