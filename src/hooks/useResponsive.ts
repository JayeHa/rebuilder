import { BreakpointType, breakpoints } from "@/styles/constants/breakpoints";
import { useEffect, useState } from "react";

type BreakPoint = BreakpointType | "lgDesktop";

interface UseResponsive {
  breakpoint: BreakPoint;

  isMobile: boolean;

  /**
   * 모바일 기기인지 확인하는 속성입니다.
   * 'tablet' 또는 'mobile' 브레이크포인트에 해당하면 true, 그 외에는 false를 반환합니다.
   */
  isMobileDevice: boolean;
}

function getResponsive() {
  const { innerWidth } = window;

  let breakpoint: BreakPoint = "lgDesktop";
  let isMobileDevice = false;
  let isMobile = false;

  if (innerWidth <= breakpoints.smDesktop) {
    breakpoint = "smDesktop";
    isMobileDevice = false;
    isMobile = false;
  }
  if (innerWidth <= breakpoints.laptop) {
    breakpoint = "laptop";
    isMobileDevice = false;
    isMobile = false;
  }
  if (innerWidth <= breakpoints.tablet) {
    breakpoint = "tablet";
    isMobileDevice = true;
    isMobile = false;
  }
  if (innerWidth <= breakpoints.mobile) {
    breakpoint = "mobile";
    isMobileDevice = true;
    isMobile = true;
  }

  return {
    breakpoint,
    isMobileDevice,
    isMobile,
  };
}

export const useResponsive = (): UseResponsive => {
  const [responsive, setResponsive] = useState(getResponsive());

  const updateResponsive = () => {
    setResponsive(getResponsive());
  };

  useEffect(() => {
    window.addEventListener("resize", updateResponsive);
    return () => window.removeEventListener("resize", updateResponsive);
  }, []);

  return {
    ...responsive,
  };
};
