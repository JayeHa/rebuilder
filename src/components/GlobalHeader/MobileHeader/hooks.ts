import { useState } from "react";

export const useMobileHeaderState = (): {
  isMobileNavOpen: boolean;
  toggleMobileNavOpen: VoidFunction;
} => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNavOpen = () => setIsMobileNavOpen((isOpen) => !isOpen);

  return { isMobileNavOpen, toggleMobileNavOpen };
};
