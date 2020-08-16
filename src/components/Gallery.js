import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images/gallery" } }) {
        nodes {
          id
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  const images = data.allFile.nodes

  return (
    <div>
      <Grid>
        {images.map(image => (
          <Img
            key={image.id}
            alt={image.name}
            fluid={image.childImageSharp.fluid}
          />
        ))}
      </Grid>
    </div>
  )
}

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 33%);
`

export default Gallery
