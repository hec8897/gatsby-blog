import * as React from "react";
import { graphql } from "gatsby";
import { Template, Title } from "component";

export const pageQuery = graphql`
  query MyQuery {
    markdownRemark(frontmatter: { link: { eq: "monorepo" } }) {
      id
      html
      frontmatter {
        title
        date
        categories
        origin
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Template title={frontmatter.title}>
      <Title
        categories={frontmatter.categories}
        image={frontmatter.featuredImage?.childImageSharp?.gatsbyImageData}
        date={frontmatter.date}
      >
        {frontmatter.title}
      </Title>
      <div className="md">
        <div className="py-4" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Template>
  );
};

export default BlogPostTemplate;
