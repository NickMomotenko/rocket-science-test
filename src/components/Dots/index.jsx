import React from "react";

import "./styles.scss";

export const Dots = ({ activeIndex = 0, counter, handler }) => {
  return (
    <div className="dots">
      <ul className="dots__list">
        {[
          ...new Array(counter),
        ].map((_, ind) => {
          let classes =
            activeIndex === ind ? "dots__item active" : "dots__item";

          return (
            <li className={classes} key={ind}>
              <button
                className="dots__btn"
                onClick={() => handler(ind)}
              ></button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
