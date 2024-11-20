import React from "react";

export const usePopup = () => {
  const [isActive, setIsActive] = React.useState(false);

  return {
    isActive,
    setIsActive,
  };
};
