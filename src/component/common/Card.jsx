import * as React from "react";

const Card = () => (
  <div className="h-[280px] rounded border drop-shadow-md bg-white p-2 flex flex-col justify-between gap-1">
    <div className="h-[50%] rounded bg-green-200 flex items-center justify-center">
      Dawoon
    </div>
    <div>
      <h2 className="text-lg font-bold">Lorem ipsum</h2>
      <p className="text-xs text-blue-400 flex gap-1 flex-wrap">
        <span>#React</span>
        <span>#Javascript</span>
        <span>#Typescript</span>
        <span>#FrontEnd</span>
        <span>#Pattern</span>
      </p>
      <span className="text-xs text-gray-500">2023-01-01</span>
    </div>
    <div className="bg-blue-300 py-2 text-center rounded-xl">Action</div>
  </div>
);

export default Card;
