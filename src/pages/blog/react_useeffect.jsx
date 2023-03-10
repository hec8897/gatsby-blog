import * as React from "react";
import { graphql } from "gatsby";
import { Template, Title } from "component";

export const pageQuery = graphql`
  query MyQuery {
    markdownRemark(frontmatter: { link: { eq: "react_useeffect" } }) {
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
      <div className="flex gap-2 text-sm">
        <span>참고글:</span>
        <a className="underline" href={frontmatter.origin} target="blank">
          {frontmatter.origin}
        </a>
      </div>
      <div className="md">
        <div className="py-4" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Template>
  );
};

export default BlogPostTemplate;
