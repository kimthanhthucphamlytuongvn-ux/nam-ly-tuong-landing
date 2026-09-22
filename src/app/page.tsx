import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { StorySection } from "@/components/sections/StorySection";
import { UspSection } from "@/components/sections/UspSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { OfferSection } from "@/components/sections/OfferSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <ProblemSection />
        <StorySection />
        <UspSection />
        <ProductsSection />
        <ValuesSection />
        <TrustSection />
        <OfferSection />
      </main>
      <Footer />
    </>
  );
}
