import * as React from "react";

const CategoryList = ({ categories }) => (
  <p className="text-xs text-blue-400 flex gap-1 flex-wrap">
    {categories?.map((categorie, index) => {
      return <span key={index}>#{categorie}</span>;
    })}
  </p>
);

export default CategoryList;
