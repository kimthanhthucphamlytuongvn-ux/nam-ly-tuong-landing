import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { worries } from "@/lib/data";

export function ProblemSection() {
  return (
    <section id="problem" className="py-20">
      <div className="mx-auto max-w-[1180px] px-[22px]">
        <Reveal className="mb-11 max-w-[660px]">
          <p className="eyebrow">Trước khi bạn chọn Nấm Lý Tưởng</p>
          <h2 className="mt-3 text-balance font-display text-[1.7rem] sm:text-[2.1rem] lg:text-[2.5rem]">
            Bạn có từng đứng trước quầy nấm và tự hỏi…
          </h2>
          <p className="mt-3.5 text-[1.04rem] text-ink-soft">
            Giữa hàng chục loại nấm không nhãn mác rõ ràng ngoài chợ hay trên kệ siêu thị, câu
            hỏi lớn nhất của mọi gia đình vẫn luôn là một điều duy nhất.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {worries.map((worry, i) => (
            <Reveal key={worry.question} delay={i * 0.08}>
              <GlassCard className="h-full p-6">
                <q className="block font-display text-[1.18rem] italic text-ink [quotes:none]">
                  {worry.question}
                </q>
                <p className="mt-3 text-[0.92rem] text-ink-dim">{worry.answer}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
