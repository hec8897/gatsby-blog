import * as React from "react";
import { graphql } from "gatsby";
import "./test.css";
import { Template } from "component";

export const pageQuery = graphql`
  query MyQuery {
    markdownRemark(frontmatter: { title: { eq: "Test2" } }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  console.log(data);
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { html } = markdownRemark;
  return (
    <Template>
      <div className="md">
        <div>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Template>
  );
}
