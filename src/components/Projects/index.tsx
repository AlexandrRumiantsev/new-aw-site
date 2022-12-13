import React from 'react'

import Imgs from "../../assets/images/display.png";
import Swipe from "../../assets/images/swipe.svg";

import { observer } from "mobx-react";
import { SwipeImg, DisplayImg, ProjectsWrapper, SlideImg, ImgContainer, DisplayWrapper, SliderCutter } from "./style"
import projectStore from '../../stores/project-store/project-store';

import SwipeableViews from 'react-swipeable-views';

export const Projects = observer((data) => {
  projectStore.list
  console.log('list', projectStore.list)
  return <ProjectsWrapper>
    <h1>Проекты</h1>
    {
                  projectStore.list.map(el => 
                    <h1>{el.title}</h1>
                  )
                }
    <ImgContainer>
      <DisplayImg src={Imgs}>
        <DisplayWrapper>
            <SliderCutter >
              <SwipeableViews enableMouseEvents>
                
              </SwipeableViews>
            </SliderCutter>
        </DisplayWrapper>
        <SwipeImg src={Swipe}/>
      </DisplayImg>
    </ImgContainer>
  </ProjectsWrapper>
})