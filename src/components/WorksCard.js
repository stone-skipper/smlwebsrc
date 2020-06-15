import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'
// import Img01 from '../img/p01_thumb.jpg'

// 4. Static Resources

//——*——*——*——*——*——//

const WorksCard = props => {
  const { type, title, imgSrc, link } = props

  return (
    <StyledWorksCard>
      <Link to={link}>
        <h1>{type}</h1>
        <div className="imgWrapper">
          <img src={require(`../img/${imgSrc}.jpg`)} alt="blah" />
        </div>
        <h2>{title}</h2>
      </Link>
    </StyledWorksCard>
  )
}

const StyledWorksCard = styled.div`
  color: white;
  width: 15vw;
  height: 70vh;
  margin-top: 4vh;
  margin-right: 0.5vw;
  float: left;
  transition: 0.4s;
  z-index: 1;
  @media (max-width: 1024px) {
    width: 80vw;
    height: 20vh;
    margin-right: 0;
    margin-bottom: 0.5vh;
    margin-top: 0;
  }

  :hover {
    width: 22vw;
    z-index: 100;
  }
  :hover h1,
  h2,
  link,
  .imgWrapper {
    z-index: 100;
  }

  & h1 {
    font-weight: 300;
    font-size: 0.6em;
    text-align: right;
    margin-bottom: 0.6em;
  }

  & h2 {
    font-weight: 600;
    text-align: left;
    font-size: 0.8em;
    margin-top: 0.6em;
  }

  & img {
    height: 100% !important;
    object-fit: contain;
  }
  & .imgWrapper {
    height: 48vh;
    width: 100%;
    overflow: hidden;
  }
`

export default WorksCard
