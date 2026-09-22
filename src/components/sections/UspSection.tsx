import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { CheckIcon } from "@/components/icons/CheckIcon";
import { uspItems } from "@/lib/data";

export function UspSection() {
  return (
    <section id="usp" className="py-20">
      <div className="mx-auto max-w-[1180px] px-[22px]">
        <Reveal className="mb-11 max-w-[660px]">
          <p className="eyebrow">Giải pháp cho nỗi lo của bạn</p>
          <h2 className="mt-3 text-balance font-display text-[1.7rem] sm:text-[2.1rem] lg:text-[2.5rem]">
            Vì sao nên chọn Nấm Lý Tưởng
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {uspItems.map((item, i) => (
            <Reveal key={item.num} delay={i * 0.08}>
              <GlassCard className="h-full p-7">
                <span className="font-display text-[0.95rem] italic text-neon-gold">
                  {item.num}
                </span>
                <h3 className="mt-3 font-display text-[1.28rem]">{item.title}</h3>
                <p className="mt-2.5 text-[0.94rem] text-ink-soft">{item.desc}</p>
                <ul className="mt-4 flex flex-col gap-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-[0.9rem] text-ink-soft">
                      <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-neon-bronze" />
                      {point}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
