import { GLOBAL_HEADER_SIZE } from "@/styles/constants/sizes";
import { useEffect, useState } from "react";

export const useGlobalHeaderState = () => {
  const [activeRoute, setActiveRoute] = useState<string | null>(null);
  const activateRoute = (route: string) => setActiveRoute(route);
  const deactivateRoute = () => setActiveRoute(null);

  // 활성화된 라우트에 따라 헤더 높이를 조절합니다.
  const [headerHeight, setHeaderHeight] = useState<number>(
    GLOBAL_HEADER_SIZE.HEIGHT
  );
  useEffect(() => {
    const isOpen = Boolean(activeRoute);
    setHeaderHeight(
      isOpen ? GLOBAL_HEADER_SIZE.HEIGHT_OPENED : GLOBAL_HEADER_SIZE.HEIGHT
    );
  }, [activeRoute]);

  return {
    headerHeight,
    navigationState: {
      activeRoute,
      onRouteHover: {
        activateRoute,
        deactivateRoute,
      },
    },
  };
};
