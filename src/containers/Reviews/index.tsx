import React, { useContext } from "react";

import { Title } from "./../../components/Title";
import { List } from "./../../components/List";
import { ReviewsCard } from "../../components/ReviewsCard";
import { Dots } from "../../components/Dots";
import { Button } from "../../components/Button";

import { PopupContext } from "../../context/PopupContext";

import { useSlider } from "../../hooks/useSlider";

import { reviews } from "../../mock/data";

import "./styles.scss";

export const Reviews = () => {
  const popupContext = useContext(PopupContext);

  let counter =
    reviews?.length % 2 === 0
      ? reviews?.length
      : Math.round(reviews?.length / 2);

  const { containerRef, activeIndex, changeIndex } = useSlider({
    sliderCounter: counter,
  });

  return (
    <div className="reviews">
      <div className="reviews__title">
        <Title>Отзывы о Барселоне</Title>
      </div>
      <div className="reviews__content">
        <div className="reviews__content-list">
          <List ref={containerRef}>
            {reviews?.map((review) => (
              <ReviewsCard
                key={review.id}
                onGalleryClick={popupContext.openPopup}
                {...review}
              />
            ))}
          </List>
        </div>
        <div className="reviews__bottom">
          <Button>Все отзывы</Button>
          <Dots
            counter={counter}
            activeIndex={activeIndex}
            handler={changeIndex}
          />
        </div>
      </div>
    </div>
  );
};
