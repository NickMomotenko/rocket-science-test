import React from "react";

import "./styles.scss";

export const Avatar = ({ url, alt, size }) => {
  return (
    <div className="avatar" style={{ height: `${size}px`, width: `${size}px` }}>
      <img className="avatar__img" src={url} alt={alt} />
    </div>
  );
};
