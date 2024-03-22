import { useState } from "react";

export const useMouseHover = (initialHovered = false) => {
  const [hovered, setHovered] = useState(initialHovered);

  const onMouseEnter = () => setHovered(true);
  const onMouseLeave = () => setHovered(false);

  return [hovered, { onMouseEnter, onMouseLeave }] as const;
};
