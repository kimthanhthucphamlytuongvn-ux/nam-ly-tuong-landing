import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CONTACT } from "@/lib/data";

export function OfferSection() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-[1180px] px-[22px]">
        <Reveal>
          <GlassCard className="grid grid-cols-1 items-center gap-9 overflow-hidden p-8 text-center sm:p-9 lg:grid-cols-[1.2fr_0.8fr] lg:p-14 lg:text-left">
            <div>
              <p className="eyebrow">Ưu đãi dành cho bạn</p>
              <h2 className="mt-2 text-balance font-display text-[1.7rem] sm:text-[2.1rem] lg:text-[2.4rem]">
                Liên hệ ngay hôm nay để nhận{" "}
                <em className="italic text-neon-gold">ưu đãi</em>
              </h2>
              <p className="mx-auto mt-3.5 max-w-[48ch] text-ink-soft lg:mx-0">
                Gọi hotline hoặc nhắn tin — đội ngũ tư vấn của Nấm Lý Tưởng sẽ hỗ trợ bạn chọn
                đúng sản phẩm và thông tin ưu đãi hiện có.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 lg:items-start">
              <Button href={`tel:${CONTACT.hotlinePrimary.tel}`} className="w-full sm:w-auto">
                <span className="font-display italic">📞 {CONTACT.hotlinePrimary.display}</span>
              </Button>
              <Button
                href={`tel:${CONTACT.hotlineSecondary.tel}`}
                variant="outline"
                className="w-full sm:w-auto"
              >
                <span className="font-display italic">📞 {CONTACT.hotlineSecondary.display}</span>
              </Button>
              <Button href="#products" variant="outline" className="w-full sm:w-auto">
                Xem sản phẩm nổi bật
              </Button>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
