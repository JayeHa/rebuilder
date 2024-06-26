import { useState } from "react";

export type NavigationState = {
  hoveredRoute: string | null;
  onRouteHover: {
    on: (route: string) => void;
    off: () => void;
  };
};

export const useDesktopHeaderState = (): {
  isSubNavOpen: boolean;
  navigationState: NavigationState;
} => {
  const [hoveredRoute, setHoveredRoute] = useState<string | null>(null);
  const on = (route: string) => setHoveredRoute(route);
  const off = () => setHoveredRoute(null);

  return {
    isSubNavOpen: Boolean(hoveredRoute),
    navigationState: {
      hoveredRoute,
      onRouteHover: {
        on,
        off,
      },
    },
  };
};
