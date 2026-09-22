"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Chip } from "@/components/ui/Chip";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { categoryFilters, products } from "@/lib/data";
import type { ProductCategory } from "@/lib/types";

export function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState<ProductCategory | "all">("all");

  const visibleProducts = useMemo(
    () => products.filter((p) => activeFilter === "all" || p.category === activeFilter),
    [activeFilter]
  );

  return (
    <section id="products" className="py-20">
      <div className="mx-auto max-w-[1180px] px-[22px]">
        <Reveal className="mb-8 max-w-[660px]">
          <p className="eyebrow">Sản phẩm</p>
          <h2 className="mt-3 text-balance font-display text-[1.7rem] sm:text-[2.1rem] lg:text-[2.5rem]">
            Một hệ sinh thái gần 100 sản phẩm từ nấm
          </h2>
          <p className="mt-3.5 text-[1.04rem] text-ink-soft">
            Từ nấm tươi mỗi ngày đến nấm khô, đồ ăn chế biến sẵn và set quà tặng — mỗi sản phẩm
            đều đi cùng nguồn gốc rõ ràng.
          </p>
        </Reveal>

        <div role="group" aria-label="Lọc theo nhóm sản phẩm" className="mb-8 flex flex-wrap gap-2.5">
          {categoryFilters.map((filter) => (
            <Chip
              key={filter.value}
              label={filter.label}
              active={activeFilter === filter.value}
              onClick={() => setActiveFilter(filter.value)}
            />
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="mt-9 text-center">
          <Button href="#contact" variant="outline">
            Liên hệ để nhận catalogue đầy đủ ~100 sản phẩm →
          </Button>
        </p>
      </div>
    </section>
  );
}
