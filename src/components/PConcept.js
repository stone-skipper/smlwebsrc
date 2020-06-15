import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PConcept = props => {
  const { desc, concept, imgSrc, txtColor } = props
  var textColor = txtColor
  return (
    <StyledPConcept textColor={textColor}>
      <img src={require(`../img/${imgSrc}.jpg`)} alt={desc} />
      <div className="wrapper">
        <div className="concept">{concept}</div> <div className="line" />
      </div>
      <p className="desc">{desc}</p>
    </StyledPConcept>
  )
}

const StyledPConcept = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin-bottom: 8vh;
  position: relative;

  img {
    width: 100%;
    height: 100% !important;
    z-index: 0;
    object-fit: cover;
  }

  .wrapper {
    z-index: 10;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 3vw;
    width: 100%;
    color: ${props => props.textColor};
    @media (max-width: 1024px) {
      left: 5vw;
      top: 5vw;
    }
  }
  .concept {
    h1 {
      font-size: 3em;
      -ms-transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      font-family: 'Titillium Web';
      display: inline-block;
      font-style: italic;
      font-weight: 300;
      line-height: 1.5;
      @media (max-width: 1024px) {
        -ms-transform: translateY(0%);
        -webkit-transform: translateY(0%);
        transform: translateY(0%);
      }
    }
    span {
      font-weight: 600;
    }
  }
  .line {
    width: 30vw;
    height: 2px;
    margin: 0;
    display: inline-block;
    /* border-top: 2px solid black; */
  }

  .desc {
    z-index: 10;
    width: 28vw;
    margin-left: 62.66vw;
    position: absolute;
    color: ${props => props.textColor};
    top: 70%;
    left: 3vw;
    font-size: 0.8em;
    @media (max-width: 1024px) {
      left: 5vw;
      margin-left: 0;
      width: 80%;
    }
  }
`

export default PConcept
