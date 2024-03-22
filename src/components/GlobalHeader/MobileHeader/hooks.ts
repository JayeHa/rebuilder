import { useState } from "react";

export const useMobileHeaderState = (): {
  isMobileNavOpen: boolean;
  toggleMobileNavOpen: VoidFunction;
} => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(true);

  const toggleMobileNavOpen = () => setIsMobileNavOpen((isOpen) => !isOpen);

  return { isMobileNavOpen, toggleMobileNavOpen };
};
