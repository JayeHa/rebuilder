import { Banner } from "./Banner";
import { HeroSection } from "./HeroSection";
import { OptimizationSection } from "./OptimizationSection";
import { SolutionSection } from "./SolutionSection";

export const ServicePage = () => {
  return (
    <div>
      <HeroSection />
      <OptimizationSection />
      <Banner />
      <SolutionSection />
    </div>
  );
};
