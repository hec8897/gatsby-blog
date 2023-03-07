import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const GatsbyImageComponent = ({ gatsbyImageData, alt }) => {
  const featuredImg = getImage(gatsbyImageData);

  return <GatsbyImage image={featuredImg} alt={alt} />;
};

export default GatsbyImageComponent;
