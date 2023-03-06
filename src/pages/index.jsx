import * as React from "react";
import "styles/global.css";
import { Header, Screen, Card } from "component";

const CONTENT_LIST = [
  {
    id: 0,
    title: "title",
    link: "FE",
    summary: "Lorem ipsum dolor sit consectetur adipisicing.",
    tagList: ["JavaScript", "TypeScript"],
    date: "2023-01-01",
  },
  {
    id: 1,
    title: "title",
    link: "FE",
    summary: "Lorem ipsum dolor sit consectetur adipisicing.",
    tagList: ["JavaScript", "TypeScript"],
    date: "2023-01-01",
  },
];

const IndexPage = () => {
  return (
    <main>
      <Header />
      <Screen>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-4 gap-4">
          {CONTENT_LIST.map((ele) => (
            <Card key={ele.id} data={ele} />
          ))}
        </div>
      </Screen>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
