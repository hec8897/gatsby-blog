import * as React from "react";
import "./markdown.css";
import { Header, Screen } from "component";

const Template = ({ children }) => {
  return (
    <main>
      <Header />
      <Screen>{children}</Screen>
    </main>
  );
};

export default Template;
