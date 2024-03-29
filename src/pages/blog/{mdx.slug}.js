import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import CodeBlock from "../../components/CodeBlock";
import { MDXProvider } from "@mdx-js/react";

const BlogPost = ({ data }) => {
  const tags = data.mdx.frontmatter.tags;

  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>Posted: {data.mdx.frontmatter.date}</p>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      <p>
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      <MDXProvider components={{ pre: CodeBlock }}>
        <p>Posted: Syntax Highlight 적용될 부분</p>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </MDXProvider>
      <hr />
      TAGS :{tags && tags.join(", ")}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        tags
      }
    }
  }
`;

export default BlogPost;
