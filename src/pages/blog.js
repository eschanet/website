import React from 'react';
import { Link, graphql } from "gatsby";

import Main from "../components/main"
import Seo from "../components/seo"

import BlogCell from '../components/Blog/BlogCell';

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <Main
      title="Blog"
      description="My Blog"
    >
    <Seo
      title="All posts"
    />
      <article className="project" id="projects">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/blog">Blog</Link></h2>
            <p>
              This is where I sometimes write down my thoughts.
            </p>
          </div>
        </header>
        <div className="posts">
        {posts.map(({ node: post }) => (
            <Link to={post.fields.slug}>
              <BlogCell
                data={post}
                key={post.frontmatter.title}
              />
            </Link>
          ))}
      </div>
      </article>
    </Main>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: {regex: "/posts/"}},
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            excerpt
          }
          fields {
            slug
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`
