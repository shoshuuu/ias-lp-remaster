import { graphql } from "gatsby";
import * as React from "react";
// import { StaticImage } from "gatsby-plugin-image";

interface ReviewCardProps {
  avatar: string;
  reviewerInfo: string;
  brandImage: string;
  reviewText: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  avatar,
  reviewerInfo,
  brandImage,
  reviewText,
}) => {
  return (
    <div className="review-card">
      <p className="review-card__text">{reviewText}</p>
      <div className="review-card__reviewer">
        <img
          className="review-card__avatar"
          src={avatar}
          alt="partner avatar"
        />
        <p className="review-card__reviewer-info">{reviewerInfo}</p>
        <img
          className="review-card__brand-image"
          src={brandImage}
          alt="partner image"
        />
      </div>
    </div>
  );
};

export const avatarQuery = graphql`
  query {
    avatars: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "reviews/avatars" }
      }
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
