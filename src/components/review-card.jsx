import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const ReviewCard = (avatar, reviewerInfo, brandImage, reviewText) => {
  return (
    <div className="review-card">
      <p className="review-card__text">{reviewText}</p>
      <div className="review-card__reviewer">
        <StaticImage
          className="review-card__avatar"
          src={avatar}
          alt="partner avatar"
        />
        <p className="review-card__reviewer-info">{reviewerInfo}</p>
        <StaticImage
          className="review-card__brand-image"
          src={brandImage}
          alt="partner image"
        />
      </div>
    </div>
  );
};
