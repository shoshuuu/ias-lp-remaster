export const ReviewCard = (avatar, reviewerInfo, brandImage, reviewText) => {
  <div className="review-card">
    <p className="review-card__text">{reviewText}</p>
    <div className="review-card__reviewer">
      <img className="review-card__avatar" src={avatar} alt="partner avatar" />
      <p className="review-card__reviewer-info">{reviewerInfo}</p>
      <img
        className="review-card__brand-image"
        src={brandImage}
        alt="partner image"
      />
    </div>
  </div>;
};
