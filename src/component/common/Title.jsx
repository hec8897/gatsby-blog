import React from "react";
import { CategoryList, GatsbyImageComponent } from "component";

const Title = ({ children, date, categories, image }) => (
  <div className="flex flex-col gap-1">
    <h1 className="font-bold">{children}</h1>
    <p>{date}</p>
    <CategoryList categories={categories} />
    <GatsbyImageComponent gatsbyImageData={image} alt="썸네일" />
  </div>
);

export default Title;
