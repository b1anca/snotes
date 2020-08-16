import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query CloudinaryImage {
      allCloudinaryMedia {
        edges {
          node {
            secure_url
          }
        }
      }
    }
  `)
  const clImages = data.allCloudinaryMedia.edges

  return (
    <div>
      <Grid>
        {clImages.map((image, index) => (
          <div key={`${index}-cl`}>
            <TransformWrapper>
              <TransformComponent>
                <Image src={image.node.secure_url} alt={`image${index}`} />
              </TransformComponent>
            </TransformWrapper>
          </div>
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

const Image = styled.img`
  border-radius: 6px;
`

export default Gallery
