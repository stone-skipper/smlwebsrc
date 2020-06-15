import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PImgTxt03 = props => {
  const { imgSrc, bg, txt1, txt2, txt3, desc1, desc2, desc3, title } = props
  return (
    <StyledPImgTxt03 bg={bg}>
      <div className="imgWrapper">
        <h1>{title}</h1>

        <img src={require(`../img/${imgSrc}.jpg`)} alt={imgSrc} />
      </div>
      <div className="txtPlacer">
        <div className="txtWrapper">
          <p>{txt1}</p>
          <p>{desc1}</p>
        </div>
        <div className="txtWrapper">
          <p>{txt2}</p>
          <p>{desc2}</p>
        </div>
        <div className="txtWrapper">
          <p>{txt3}</p>
          <p>{desc3}</p>
        </div>
      </div>
    </StyledPImgTxt03>
  )
}

const StyledPImgTxt03 = styled.div`
  width: 100vw;
  height: max-content;
  margin-bottom: 15vh;
  display: grid;
  grid-template-rows: 75vh 25vh;
  grid-gap: 5vh;

  .imgWrapper {
    width: 94vw;
    height: 75vh;
    margin-left: 3vw;
    background-color: ${props => props.bg};
    img {
      width: 100%;
      height: 100% !important;
      object-fit: contain;
    }
    h1 {
      position: absolute;
    }
  }
  .txtPlacer {
    width: 94vw;
    height: 15vh;
    display: grid;
    grid-template-columns: 31.33vw 31.33vw 31.33vw;
    grid-gap: 0;
    margin-left: 3vw;
    font-size: 0.8em;
    color: white;
  }

  .txtWrapper {
    width: 30vw;

    p:nth-of-type(1) {
      font-weight: 600;
    }
    p:nth-of-type(2) {
      width: 80%;
    }
  }
`

export default PImgTxt03
