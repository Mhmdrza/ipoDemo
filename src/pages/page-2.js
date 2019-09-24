import React from "react"

import Img from "gatsby-image"
import { graphql } from "gatsby"

export default ({data}) => (
  <div>
    <Img key='aa' alt='asddd' fluid={data.allImageSharp.edges[0].node.fluid} />
    <Img key='asd' alt='asd' fluid={data.allImageSharp.edges[1].node.fluid} />
  </div>
)

export const query = graphql`
  query {
    allImageSharp(filter: {fluid: {originalName: {in: ["bg-person.png","grad-bg.png"]}}}) {
      edges {
        node {
          id
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

