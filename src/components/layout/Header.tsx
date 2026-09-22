"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { navLinks, CONTACT } from "@/lib/data";
import { cn } from "@/lib/cn";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 24);
  });

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={cn(
        "sticky top-[env(safe-area-inset-top,0px)] z-50 py-3.5 backdrop-blur-[16px] transition-colors duration-300",
        isScrolled ? "border-b border-glass-border bg-[#06100bd1]" : "border-b border-transparent bg-[#06100b66]"
      )}
    >
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-[22px]">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex items-center rounded-xl bg-white px-2.5 py-1.5 shadow-glow-gold">
            <Image src="/logo.jpg" alt="Nấm Lý Tưởng – Healthy Foods Now" width={60} height={34} className="h-[34px] w-auto" priority />
          </span>
          <span className="hidden font-display text-[1.05rem] text-ink sm:block">Nấm Lý Tưởng</span>
        </a>

        <nav aria-label="Điều hướng chính" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[0.92rem] tracking-wide text-ink-soft transition-colors hover:text-neon-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button href={`tel:${CONTACT.hotlinePrimary.tel}`} className="hidden sm:inline-flex">
            Gọi tư vấn
          </Button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label="Mở menu"
            className="glass flex h-11 w-11 items-center justify-center rounded-xl md:hidden"
          >
            <span className="relative block h-0.5 w-[18px] bg-ink">
              <span
                className={cn(
                  "absolute left-0 block h-0.5 w-[18px] bg-ink transition-transform",
                  isMenuOpen ? "top-0 translate-y-1 rotate-45" : "-top-1.5"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-0.5 w-[18px] bg-ink transition-transform",
                  isMenuOpen ? "top-0 -translate-y-1 -rotate-45" : "top-1.5"
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobile-nav"
            aria-label="Điều hướng di động"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-auto flex max-w-[1180px] flex-col gap-1 overflow-hidden px-[22px] md:hidden"
          >
            <div className="glass mt-3.5 flex flex-col gap-1 rounded-md p-3.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-[10px] px-2.5 py-3 text-base text-ink-soft transition-colors hover:bg-glass-strong hover:text-neon-gold"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
