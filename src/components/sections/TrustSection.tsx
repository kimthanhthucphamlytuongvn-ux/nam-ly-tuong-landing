import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { BadgeIcon } from "@/components/icons/BadgeIcon";
import { CheckIcon } from "@/components/icons/CheckIcon";
import { StoreIcon } from "@/components/icons/StoreIcon";
import { marketLogos, ocopRows, CONTACT } from "@/lib/data";
import { cn } from "@/lib/cn";

export function TrustSection() {
  return (
    <section id="trust" className="py-[84px]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-[22px] lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className="eyebrow">Yếu tố tin cậy</p>
          <h2 className="mt-3 text-balance font-display text-[1.7rem] sm:text-[2.1rem] lg:text-[2.5rem]">
            Không chỉ là lời hứa — là giấy chứng nhận thật
          </h2>
          <p className="mt-3.5 max-w-[52ch] text-ink-soft">
            {CONTACT.legalName}, đăng ký kinh doanh số 0105982699, cấp ngày 29/08/2012 tại Sở Kế
            hoạch và Đầu tư TP. Hà Nội.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <GlassCard className="flex items-center gap-2.5 px-4 py-3 text-[0.86rem]">
              <BadgeIcon className="h-5 w-5 flex-none text-neon-gold" />
              Chứng nhận HACCP
            </GlassCard>
            <GlassCard className="flex items-center gap-2.5 px-4 py-3 text-[0.86rem]">
              <CheckIcon className="h-5 w-5 flex-none text-neon-gold" />
              Chuỗi cung ứng nông sản an toàn – Bộ NN&amp;PTNT
            </GlassCard>
            <GlassCard className="flex items-center gap-2.5 px-4 py-3 text-[0.86rem]">
              <StoreIcon className="h-5 w-5 flex-none text-neon-gold" />
              Top 1–2 thị phần nấm miền Bắc
            </GlassCard>
          </div>

          <div className="mt-7">
            <p className="mb-2.5 text-[0.8rem] text-ink-dim">
              Sản phẩm hiện được phân phối tại các hệ thống siêu thị trên toàn quốc
            </p>
            <div className="flex flex-wrap gap-2">
              {marketLogos.map((logo) => (
                <span
                  key={logo}
                  className="glass rounded-lg px-4 py-2 text-[0.8rem] text-ink-soft"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <GlassCard className="p-8">
            <p className="eyebrow mb-4">Chứng nhận OCOP</p>
            {ocopRows.map((row) => (
              <div
                key={row.label}
                className={cn(
                  "flex items-baseline justify-between gap-4 py-3",
                  row.isTotal
                    ? "mt-2 border-t border-glass-border pt-5"
                    : "border-b border-dashed border-glass-border"
                )}
              >
                <span
                  className={cn(
                    "font-display italic [font-variant-numeric:tabular-nums]",
                    row.isTotal
                      ? "text-[2.6rem] text-neon-gold [text-shadow:0_0_1px_rgba(233,183,92,1),0_0_46px_-6px_rgba(233,183,92,.55),0_0_110px_-24px_rgba(233,183,92,.4)]"
                      : "text-[1.8rem] text-neon-green"
                  )}
                >
                  {row.n}
                </span>
                <span className="max-w-[60%] text-right text-[0.86rem] text-ink-soft">
                  {row.label}
                </span>
              </div>
            ))}
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
