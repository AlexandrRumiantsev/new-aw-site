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
  height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
   align-items: center;
`

export const SlideImg = styled.img`
  min-width: 606px;
  height: fit-content;
  top: 37px;
`

export const ImgContainer = styled.div`
  position: relative;
  overflow: hidden;
`

export const DisplayWrapper = styled.div<any>`
  padding-top: 37px;
  position: relative;
  width: 64vh;
  height: 40vh;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
`

export const SliderCutter = styled.div<any>`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
`