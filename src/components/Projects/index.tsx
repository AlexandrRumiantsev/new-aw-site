import React from 'react'

import Imgs from "../../assets/images/display.png";
import { useStores } from '../../utils/use-stores/use-stores'
import { observer } from "mobx-react";
import { DisplayImg, ProjectsWrapper, SlideImg, ImgContainer, DisplayWrapper, SliderCutter } from "./style"

import SwipeableViews from 'react-swipeable-views';

export const Projects = observer(() => {

  const { projects: {list, status} } = useStores()

  return <ProjectsWrapper>
    <h1>Проекты</h1>
    <ImgContainer>
        <DisplayImg src={Imgs}>
          <DisplayWrapper>
           
              <SliderCutter >
                <SwipeableViews enableMouseEvents>
                  {
                    list.map(el => 
                    <SlideImg src={`http://api.alexweber.ru/${el.previmg}`} />
                    )
                  }
                </SwipeableViews>
              </SliderCutter>
          
          </DisplayWrapper>
        </DisplayImg>
    </ImgContainer>
  </ProjectsWrapper>
})