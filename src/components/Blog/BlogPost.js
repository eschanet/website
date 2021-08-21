import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import dayjs from 'dayjs';

import Main from "../main"
import Seo from "../seo"

const shortcodes = { Link } // Provide common components here

export default function BlogPost({ data: { mdx } }) {
  const { frontmatter, body, fields } = mdx

  return (
    <Main
      title="About"
      description="Learn about Eric Schanet"
    >
      <Seo title="About me" />
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2 data-testid="heading">{frontmatter.title}</h2>
            <p>about {fields.readingTime.text} &#8226; {dayjs(frontmatter.date).format('MMMM, DD, YYYY')}</p>
          </div>
        </header>
        <MDXProvider components={shortcodes}>
          <MDXRenderer frontmatter={frontmatter}>{body}</MDXRenderer>
        </MDXProvider>
        <br></br>
      </article>
    </Main>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
