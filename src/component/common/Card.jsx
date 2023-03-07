import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Card = ({ data }) => {
  const { title, date, summary, categories, featuredImage } = data;
  let featuredImg = getImage(featuredImage?.childImageSharp?.gatsbyImageData);

  return (
    <div className="h-[280px] rounded border drop-shadow-md bg-white p-2 flex flex-col justify-between">
      <div className="h-[50%] rounded bg-green-200 flex items-center justify-center overflow-hidden">
        <GatsbyImage image={featuredImg} alt="썸네일" />
        {data?.preview}
      </div>
      <div>
        <h2 className="text-lg font-bold hover:underline cursor-pointer">
          <Link to={"posts/" + title}>{title}</Link>
        </h2>
        <p className="text-xs">{summary}</p>
        <p className="text-right">
          <span className="text-xs text-gray-500">{date}</span>
        </p>
      </div>
      <p className="text-xs text-blue-400 flex gap-1 flex-wrap">
        {categories.map((tag, index) => (
          <span key={index}>#{tag}</span>
        ))}
      </p>
    </div>
  );
};

export default Card;
