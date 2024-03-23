import { useResponsive } from "@/hooks/useResponsive";
import { Section } from "@components/Section";
import { DesktopOptimization } from "./DesktopOptimization";
import { MobileOptimization } from "./MobileOptimization";

export const OptimizationSection = () => {
  const { isMobile } = useResponsive();

  return (
    <Section backgroundColor="background">
      {!isMobile && <DesktopOptimization />}
      {isMobile && <MobileOptimization />}
    </Section>
  );
};
