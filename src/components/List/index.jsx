import React, { forwardRef } from "react";

import "./styles.scss";

export const List = forwardRef(({ children, ...props }, ref) => {
  return (
    <ul className="list" ref={ref} {...props}>
      {children}
    </ul>
  );
});
