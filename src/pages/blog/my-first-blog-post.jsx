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

const BlogPostTemplate = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  console.log(data);
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  return (
    <Template>
      <div className="md">
        <div>
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Template>
  );
};

export default BlogPostTemplate;
