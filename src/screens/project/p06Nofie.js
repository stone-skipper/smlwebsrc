import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// 1. Dependencies
// 2. Components
import PCover from '../../components/PCover'
import PConcept from '../../components/PConcept'
import PImgTxt01 from '../../components/PImgTxt01'
import PImgTxt01wide from '../../components/PImgTxt01wide'
import PImgTxt02 from '../../components/PImgTxt02'
import PImgTxt02Wide from '../../components/PImgTxt02Wide'
import PImgTxtCircle from '../../components/PImgTxtCircle'
import PImgLayout01 from '../../components/PImgLayout01'
import PImgLayout02 from '../../components/PImgLayout02'
import PDrawing from '../../components/PDrawing'
import POverview from '../../components/POverview'
import PProcess from '../../components/PProcess'
import PGif from '../../components/PGif'
import POutro from '../../components/POutro'

// 3. for style
import styled from 'styled-components'
import Close from '@material-ui/icons/Close'

// 4. Static Resources

//——*——*——*——*——*——//

const p06Nofie = () => {
  var imgLayout01 = [
    {
      imgSrc: 'p01_img06',
      desc: 'Regular sounds that make you calm'
    },
    {
      imgSrc: 'p01_img07',
      desc: 'Soft fidget effect from an elastic material'
    },
    {
      imgSrc: 'p01_img08',
      desc: 'Doing nothing as a task to finish'
    }
  ]
  var imgLayout02 = [
    {
      imgSrc: 'p01_img09',
      desc: ''
    }
  ]
  var processImg = [
    {
      imgSrc: 'p01_pr01',
      desc: 'fidget exploration'
    },
    {
      imgSrc: 'p01_pr03',
      desc: '3d prototyping'
    },
    {
      imgSrc: 'p01_pr02',
      desc: '3d prototyping'
    },
    {
      imgSrc: 'p01_pr04',
      desc: '3d prototyping'
    }
  ]
  var circleImgs = [
    {
      imgSrc: 'p01_img12',
      desc: 'seconds flow in your palm with sounds and movements'
    },
    {
      imgSrc: 'p01_img11',
      desc: 'softness and flexibility deliver nice relaxation'
    },
    { imgSrc: 'p01_img04', desc: 'only the seconde hand, and the 25-min guage' }
  ]
  return (
    <Styledp06Nofie>
      <Link to="/works">
        <Close className="closeButton" />
      </Link>
      <PCover
        title="idly"
        desc="a timer that makes you do nothing"
        type="industrial design"
        year="2019"
        detail="personal work"
        imgSrc="p01_thumb"
        icons={[]}
      />
      <POverview
        question={
          <p>
            "There are lots of tools to make us productive. <br />
            But what about vice versa?"
          </p>
        }
      />
      <PDrawing
        imgSrc="p01_sketch"
        title="It's hard to focus on doing nothing"
        desc="Taking a rest is not that easy. We get easily distracted from doing nothing, by sounds of other people, small thoughts in your mind, and an impatience of staying idle. "
      />

      <PImgTxtCircle
        imgs={imgLayout01}
        title="Use the sense of touch and time"
        desc="In this project, I wanted a tool for ‘easy and enjoyable relaxation’, rather than get bored or distracted while trying high-level meditation. Through interviews and explorations of calming activities, I found those three factors effective. "
      />
      <PImgTxt01
        imgs={imgLayout01}
        title="Use the sense of touch and time"
        desc="In this project, I wanted a tool for ‘easy and enjoyable relaxation’, rather than get bored or distracted while trying high-level meditation. Through interviews and explorations of calming activities, I found those three factors effective. "
      />
      <PConcept
        imgSrc="p01_concept"
        concept={
          <h1>
            Stop working, stay <span>idly</span>
          </h1>
        }
        desc="idly is a timer that makes you do nothing, a tool for the relaxation of your mind and senses. "
        txtColor="black"
      />
      <PImgLayout01 imgSrc="p01_img16" />

      <PImgTxt01
        imgs={imgLayout02}
        title="Time only flows in your palm"
        desc="To turn on the timer, you can simply hold the product in your palm. Then it starts ticking, meaning that you're starting your relaxing mode. "
      />
      <PImgTxtCircle
        imgs={circleImgs}
        title="A pocket watch you touch, feel, and wait"
        desc="The motif of the overall shape is a pocket watch. By adding appropriate materials and simplifying the interface solely
for the rest, I came up with a timer for relaxation."
      />
      <PGif
        imgSrc="p01_img17"
        title="this is a timer, only with a second hand "
        desc="The interface is simple. It only shows how the second flows, and a guage of total time. You can reset the guage with the aluminum button on the bottom. "
      />

      {/* <PImgTxt01wide
        imgSrc="p01_img02"
        title="sounds and movements in your palm"
        desc="blah blah blah blah blah blah"
        txtColor="white"
      /> */}
      {/* <PImgLayout01 imgSrc="p01_img03" /> */}
      {/* <PImgTxt02
        imgSrc="p01_img02"
        title="Hold and feel, then the time flows"
        desc="blah"
      /> */}
      <PImgTxt02Wide
        imgSrc="p01_img02"
        title=""
        desc="Sounds and movements in your palm let you stay focuesd on doing nothing. "
        txtColor="white"
      />
      <PImgTxt02
        imgSrc="p01_img03"
        title="Softness and flexibility"
        desc="blah"
      />
      <PImgLayout02 imgSrc1="p01_img13" imgSrc2="p01_img14" />

      <PProcess imgs={processImg} />
      <POutro
        line1="Personal project"
        line2="Inspired and motivated from my personal experience of ‘burnout’"
      />
    </Styledp06Nofie>
  )
}

const Styledp06Nofie = styled.div`
  width: 100vw;
  height: 100%;
  background-color: red;
  color: white;
  z-index: 10000;
  position: absolute;
  /* scroll-snap-type: y mandatory; */

  & .closeButton {
    position: fixed;
    top: 3vw;
    right: 3vw;
    font-size: 2em;
    z-index: 100000000;
  }
`

export default p06Nofie
