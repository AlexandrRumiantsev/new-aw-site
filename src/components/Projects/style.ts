import styled from 'styled-components'

import { TEXT_COLOR_0_7_WHITE } from '~/globals'

export const DisplayImg = styled.div<any>`
  height: 50vh;
  width: 100vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.src});
  position: relative;
  background-position: center;
`

export const ProjectsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
   align-items: center;
`

export const SlideImg = styled.img<any>`
  width: 606px;
  height: fit-content;
  top: 37px;
`

export const ImgContainer = styled.div`
  position: relative;
`

export const DisplayWrapper = styled.div<any>`
  padding-top: 37px;
  position: relative;
  width: 64vh;
  height: 40vh;
  margin: auto;
  display: flex;
  justify-content: flex-start;
`

export const SliderCutter = styled.div<any>`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
`

export const SwipeImg = styled.img<any>`
  position: absolute;
  width: 100%;
  height: 60px;
  margin: 0 auto;
  bottom: -65px;
  animation: blink 2.5s infinite linear;
  @-webkit-keyframes blink {
    from { opacity: 1.0; }
    to { opacity: 0.0; }
  }
  @keyframes blink {
    0 {  transform: scale(1) }
    50% { transform: scale(1.2) }
    100% { transform: scale(1) }
  }
`