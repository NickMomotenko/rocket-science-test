import React, { useContext } from "react";
import "./styles.scss";
import { Title } from "./../../components/Title";
import { List } from "./../../components/List";
import { ReviewsCard } from "../../components/ReviewsCard";

import { reviews } from "../../mock/data";
import { Dots } from "../../components/Dots";
import { Button } from "../../components/Button";
import { PopupContext } from "../../context/PopupContext";
import { useSlider } from "../../hooks/useSlider";

export const Reviews = () => {
  const popupContext = useContext(PopupContext);

  const { containerRef, activeIndex, changeIndex } = useSlider();

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
            counter={reviews?.length}
            activeIndex={activeIndex}
            handler={changeIndex}
          />
        </div>
      </div>
    </div>
  );
};
