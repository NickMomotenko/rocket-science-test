import React from "react";

import { ReactSVG } from "react-svg";

import { Avatar } from "./../Avatar";

import likeIcon from "../../assets/like.svg";

import "./styles.scss";

export const ReviewsCard = ({
  author,
  comments,
  liked,
  created_at,
  title,
  text,
  images,
  onGalleryClick,
}) => {
  let galleryConter = images.length - 4;
  let [city, info] = title.split("-");

  return (
    <li className="reviews-card">
      <div className="reviews-card__head">
        <div className="reviews-card__user-avatar">
          <Avatar url={author.avatar} alt={author.fullname} size={30} />
        </div>
        <div className="reviews-card__user-fullname">{author.fullname}</div>
      </div>
      <div className="reviews-card__content">
        <div className="reviews-card__subtitle">
          <span>{city}</span> - {info}
        </div>
        <div className="reviews-card__info">{text}</div>
        <div className="reviews-card__gallery">
          <ul className="reviews-card__gallery-list">
            {images?.slice(0, 4)?.map((image, ind) => (
              <li
                key={ind}
                className="reviews-card__gallery-item"
                onClick={() =>
                  onGalleryClick(
                    <img src={image.url} className="gallery-preview" />
                  )
                }
              >
                <img src={image.url} className="reviews-card__gallery-img" />
                {ind === 3 && (
                  <div className="reviews-card__gallery-counter">
                    +{galleryConter}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="reviews-card__bottom">
          <button className="reviews-card__created-at">{created_at}</button>
          <button className="reviews-card__comments">
            {comments.length} комментариев
          </button>
          <button className="reviews-card__likes">
            <ReactSVG src={likeIcon} />
            <div className="reviews-card__likes-value">{liked.length}</div>
          </button>
        </div>
      </div>
    </li>
  );
};
