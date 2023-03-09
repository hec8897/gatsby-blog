import * as React from "react";
import { graphql } from "gatsby";
import { Template, Title } from "component";

export const pageQuery = graphql`
  query MyQuery {
    markdownRemark(frontmatter: { link: { eq: "gatsby_blog" } }) {
      id
      html
      frontmatter {
        title
        date
        categories
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
    <Template>
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

export const Head = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;

  return <title>{frontmatter.title}</title>;
};
