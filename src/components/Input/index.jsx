import React from "react";

import "./styles.scss";

export const Input = ({ value, onChange, placeholder }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type="text"
      className="input"
      placeholder={placeholder}
    />
  );
};
