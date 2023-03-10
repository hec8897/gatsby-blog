import * as React from "react";
import "./markdown.css";
import { Header, Screen } from "component";
import { Helmet } from "react-helmet";
const Template = ({ children, active, title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <main>
        <Screen>
          <Header {...active} />
        </Screen>
        <Screen>{children}</Screen>
      </main>
    </>
  );
};

export default Template;
