import { useStaticQuery, graphql, StaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
// import { StaticImage } from "gatsby-plugin-image";

const reviews = () => {
  const { Avatars, BrandImages, Reviews } = useStaticQuery(reviewsQuery);

  const avatars = Avatars.edges.map((element: any) => {
    return element.node.childImageSharp.gatsbyImageData;
  });
  const brandImages = BrandImages.edges.map((element: any) => {
    return element.node.childImageSharp.gatsbyImageData;
  });

  const reviewsCount = Reviews.totalCount;

  console.log(reviewsCount);
  console.log(avatars);
  console.log(brandImages);

  const array = new Array<{}>();

  for (let i = 0; i < reviewsCount; i++) {}
};

export function ReviewCard() {
  return (
    <div className="review-card">
      {/* {avatars} */}
      <p className="review-card__text text">{}</p>
      <div className="review-card__reviewer">
        {/* <img
          className="review-card__avatar"
          src={avatar}
          alt="partner avatar"
        /> */}
        <p className="review-card__reviewer-info text">{}</p>
        {/* <img
          className="review-card__brand-image"
          src={brandImage}
          alt="partner image"
        /> */}
      </div>
    </div>
  );
}

const reviewsQuery = graphql`
  query ReviewsQuery {
    Reviews: allDirectory(filter: { relativeDirectory: { eq: "reviews" } }) {
      totalCount
    }

    Avatars: allFile(filter: { relativeDirectory: { eq: "reviews/avatars" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            gatsbyImageData(sizes: "157px", height: 48, aspectRatio: 1)
          }
          name
        }
      }
    }
    BrandImages: allFile(
      filter: { relativeDirectory: { eq: "reviews/brand-images" } }
    ) {
      edges {
        node {
          relativePath
          childImageSharp {
            gatsbyImageData(sizes: "157px", height: 10, aspectRatio: 1)
          }
          name
        }
      }
    }
  }
`;
