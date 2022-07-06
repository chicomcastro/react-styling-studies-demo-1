import { useMediaQuery } from "@mui/material";
import { useState } from "react";

export const InlineStyledButton = () => {
  // Controle do estilo do estado hover
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // Controle do estilo da responsividade
  const isLowerThan1000Px = useMediaQuery("(max-width:1000px)");
  const isLowerThan800Px = useMediaQuery("(max-width:800px)");
  const isLowerThan600Px = useMediaQuery("(max-width:600px)");

  const getButtonPadding = () => {
    if (isLowerThan600Px) {
      return 40;
    }
    if (isLowerThan800Px) {
      return 32;
    }
    if (isLowerThan1000Px) {
      return 24;
    }
    return 16;
  };

  return (
    <button
      style={{
        backgroundColor: isHovering ? "salmon" : "",
        padding: getButtonPadding(),
        width: 320,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Fui estilizado por inline styles
    </button>
  );
};
