import React from "react";
import { Title } from "../../components/Title";
import { Button } from "../../components/Button";

import previewBg from "../../assets/previews.png";

import "./styles.scss";

export const Preview = () => {
  return (
    <div className="preview">
      <div className="preview__img">
        <img src={previewBg} alt="previw bg" />
      </div>
      <div className="preview__content">
        <div className="preview__title">
          <Title>Барселона — обзор города</Title>
        </div>
        <div className="preview__info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          cupiditate enim laborum beatae eveniet, perferendis sint incidunt
          maxime magnam? Rem officia iste perspiciatis ab amet nobis ad,
          quisquam reiciendis minus. Rem officia iste perspiciatis ab amet nobis
          ad, quisquam reiciendis minus.
        </div>
        <div className="preview__btn">
          <Button>Читать дальше</Button>
        </div>
      </div>
    </div>
  );
};
