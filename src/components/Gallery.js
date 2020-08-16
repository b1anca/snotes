import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { Lightbox } from "react-modal-image"

const Gallery = () => {
  const [modalImageIdx, setModalImageIdx] = useState()
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images/gallery" } }) {
        nodes {
          id
          name
          publicURL
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
  const modalImg = images[modalImageIdx]

  return (
    <div>
      <Grid>
        {images.map((image, index) => (
          <div key={image.id} onClick={() => setModalImageIdx(index)}>
            <Img
              alt={image.name}
              fluid={image.childImageSharp.fluid}
              style={{
                width: "100%",
                height: "100%",
                cursor: "pointer",
                borderRadius: 6,
              }}
            />
          </div>
        ))}
        {modalImg && (
          <Lightbox
            large={modalImg.publicURL}
            alt={modalImg.name}
            onClose={setModalImageIdx}
          />
        )}
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
