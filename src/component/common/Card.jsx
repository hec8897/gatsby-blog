import * as React from "react";
import { Link } from "gatsby";

const Card = ({ data }) => {
  const { title, date, tagList, id, link, summary } = data;
  return (
    <div className="h-[280px] rounded border drop-shadow-md bg-white p-2 flex flex-col justify-between">
      <div className="h-[50%] rounded bg-green-200 flex items-center justify-center">
        {title}
      </div>
      <div>
        <h2 className="text-lg font-bold hover:underline cursor-pointer">
          <Link to={link + "/" + id}>{title}</Link>
        </h2>
        <p className="text-xs">{summary}</p>
        <p className="text-right">
          <span className="text-xs text-gray-500">{date}</span>
        </p>
      </div>
      <p className="text-xs text-blue-400 flex gap-1 flex-wrap">
        {tagList.map((tag, index) => (
          <span key={index}>#{tag}</span>
        ))}
      </p>
    </div>
  );
};

export default Card;
