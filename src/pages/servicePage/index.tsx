import { useScrollProgress } from "@toss/scroll-animation";
import { HeroSection } from "./HeroSection";
import { OptimizationSection } from "./OptimizationSection";

export const ServicePage = () => {
  const { ref } = useScrollProgress<HTMLDivElement>();

  return (
    <div ref={ref} css={{ height: "1000vh" }}>
      <HeroSection />
      <OptimizationSection />
    </div>
  );
};
