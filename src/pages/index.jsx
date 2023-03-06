import * as React from "react";
import "styles/global.css";
import { Header } from "component";

const IndexPage = () => {
  return (
    <main>
      <Header />
      <h1 className="text-3xl font-bold underline text-red-500">123</h1>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
