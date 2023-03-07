import * as React from "react";
import { Link } from "gatsby";
import { CategoryList, GatsbyImageComponent } from "component";

const Card = ({ data }) => {
  const { title, date, summary, categories, featuredImage, link } = data;

  return (
    <Link to={"blog/" + link}>
      <div className="h-[280px] rounded border drop-shadow-md bg-white p-2 flex flex-col justify-between hover:-translate-y-2 transition-all">
        <div className="h-[50%] rounded bg-green-100 flex items-center justify-center overflow-hidden">
          <GatsbyImageComponent
            gatsbyImageData={featuredImage?.childImageSharp?.gatsbyImageData}
            alt="썸네일"
          />
          {data?.preview}
        </div>
        <div>
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-xs">{summary}</p>
          <p className="text-right">
            <span className="text-xs text-gray-500">{date}</span>
          </p>
        </div>
        <CategoryList categories={categories} />
      </div>
    </Link>
  );
};

export default Card;
