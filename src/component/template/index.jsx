import * as React from "react";
import "./markdown.css";
import { Header, Screen } from "component";

const Template = ({ children, active }) => {
  return (
    <main>
      <Screen>
        <Header {...active} />
      </Screen>
      <Screen>{children}</Screen>
    </main>
  );
};

export default Template;
