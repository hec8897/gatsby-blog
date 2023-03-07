import * as React from "react";
import { graphql } from "gatsby";
import { Template, CategoryList, GatsbyImageComponent } from "component";

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

const BlogPostTemplate = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  return (
    <Template>
      <div className="md">
        <div>
          <GatsbyImageComponent
            gatsbyImageData={
              frontmatter.featuredImage?.childImageSharp?.gatsbyImageData
            }
            alt="썸네일"
          />
          <div className="flex flex-col gap-1 mb-4">
            <h1 className="font-bold">{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <CategoryList categories={frontmatter.categories} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Template>
  );
};

export default BlogPostTemplate;
