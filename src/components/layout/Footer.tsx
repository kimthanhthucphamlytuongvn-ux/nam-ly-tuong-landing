import Image from "next/image";
import { CONTACT } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-glass-border py-14 pb-10">
      <div className="mx-auto max-w-[1180px] px-[22px]">
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-[1.3fr_1fr_1fr] sm:gap-9">
          <div>
            <a href="#top" className="mb-3.5 inline-flex items-center">
              <span className="flex items-center rounded-xl bg-white px-2.5 py-1.5">
                <Image src="/logo.jpg" alt="Nấm Lý Tưởng" width={60} height={34} className="h-[34px] w-auto" />
              </span>
            </a>
            <p className="max-w-[34ch] text-sm text-ink-soft">
              {CONTACT.legalName}. Sống khỏe mỗi ngày, bắt đầu từ một cây nấm sạch.
            </p>
          </div>

          <div>
            <h5 className="eyebrow mb-3.5">Liên hệ</h5>
            <a
              href={`tel:${CONTACT.hotlinePrimary.tel}`}
              className="mb-1.5 block text-sm text-ink-soft transition-colors hover:text-neon-green"
            >
              Hotline: {CONTACT.hotlinePrimary.display} – {CONTACT.hotlineSecondary.display}
            </a>
            <p className="mb-1.5 text-sm text-ink-soft">Website: {CONTACT.website}</p>
            <p className="mb-1.5 text-sm text-ink-soft">{CONTACT.addressHN}</p>
            <p className="mb-1.5 text-sm text-ink-soft">{CONTACT.showroom}</p>
            <p className="mb-1.5 text-sm text-ink-soft">{CONTACT.addressHCM}</p>
          </div>

          <div>
            <h5 className="eyebrow mb-3.5">Kết nối</h5>
            <p className="mb-1.5 text-sm text-ink-soft">Facebook · Shopee · TikTok Shop · Lazada</p>
            <h5 className="eyebrow mb-3.5 mt-5">Pháp lý</h5>
            <p className="text-sm text-ink-soft">
              {CONTACT.bizLicense}
              <br />
              {CONTACT.bizLicenseDate}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-glass-border pt-[22px] text-[0.8rem] text-ink-dim">
          <span>© {year} Nấm Lý Tưởng — Sống khỏe mỗi ngày.</span>
          <span>Bản demo thiết kế · số điện thoại là hotline thật của công ty.</span>
        </div>
      </div>
    </footer>
  );
}
