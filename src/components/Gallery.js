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
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  grid-auto-rows: minmax(50px, auto);

  img:nth-child(5n) {
    grid-column-end: span 2;
  }
`

const Image = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default Gallery
