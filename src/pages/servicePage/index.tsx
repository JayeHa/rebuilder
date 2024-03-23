import { useScrollProgress } from "@toss/scroll-animation";
import { HeroSection } from "./HeroSection";

export const ServicePage = () => {
  const { ref } = useScrollProgress<HTMLDivElement>();

  return (
    <div ref={ref} css={{ height: "1000vh" }}>
      <HeroSection />
    </div>
  );
};
