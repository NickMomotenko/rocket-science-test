import React from "react";
import "./styles.scss";
import { ReactSVG } from "react-svg";

import starIcon from "../../assets/star.svg";

export const Rating = ({ value }) => {
  return (
    <div className="rating">
      <ul className="rating__list">
        {[...new Array(5)].map((_, ind) => {
          let classes =
            ind + 1 <= value ? "rating__item active" : "rating__item";

          return (
            <li className={classes} key={ind}>
              <ReactSVG src={starIcon} fill="red" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
