import * as React from "react";
import "styles/global.css";
import { Header, Screen } from "component";

const IndexPage = () => {
  return (
    <main>
      <Header />
      <Screen>
        <h1 className="text-3xl font-bold underline text-red-500">블로그</h1>
      </Screen>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
