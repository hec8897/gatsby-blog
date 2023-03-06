import * as React from "react";
import "styles/global.css";
import { Header, Screen, Card } from "component";

const IndexPage = () => {
  return (
    <main>
      <Header />
      <Screen>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-4 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Screen>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
