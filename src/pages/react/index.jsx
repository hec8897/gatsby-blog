import * as React from "react";
import "styles/global.css";
import { Card, Template } from "component";
import { graphql } from "gatsby";

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark(
      filter: { frontmatter: { categories: { eq: "React" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        id
        frontmatter {
          title
          link
          summary
          date
          categories
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 350)
            }
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data;
  return (
    <Template active="react" title="dawoonRoad:react">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-4 gap-4">
        {allMarkdownRemark.nodes.map((data) => (
          <Card key={data.id} data={data.frontmatter} />
        ))}
      </div>
    </Template>
  );
};

export default IndexPage;
