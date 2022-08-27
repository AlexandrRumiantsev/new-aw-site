import React from 'react'

import Imgs from "../../assets/images/display.png";
import { useStores } from '../../utils/use-stores/use-stores'
import { observer } from "mobx-react";
import { DisplayImg, ProjectsWrapper, SlideImg, ImgContainer, DisplayWrapper, SliderCutter } from "./style"

const myRef = React.createRef();

interface Location {
  animate: any
}

let slide = 0

const swipeTo = (list: any) => {
    console.log(myRef)
    slide++
    const domElem = myRef.current as Location
    const number = slide * 100


    if(slide == list.length){
      slide = 0
      domElem.animate([
        // keyframes
        { left: `0` }
      ], {
        // timing options
        fill: "forwards",
        duration: 1000,
      });
    }else {
    domElem.animate([
      // keyframes
      { left: `-${number}%` }
    ], {
      // timing options
      fill: "forwards",
      duration: 1000,
    });
  }



}

const swipeBack = (list: any) => {
  console.log(myRef)
  slide--
  const domElem = myRef.current as Location
  const number = slide * 100

  if(slide < 0){

    domElem.animate([
      // keyframes
      { left: `-${list.length - 1 * 100}%` }
    ], {
      // timing options
      fill: "forwards",
      duration: 1000,
    });
    slide = list.length
  }else {
    domElem.animate([
      // keyframes
      { left: `-${number}%` }
    ], {
      // timing options
      fill: "forwards",
      duration: 1000,
    });
  }


}

export const Projects = observer(() => {
  const { projects: {list, status} } = useStores()
 
  return <ProjectsWrapper>
    <h1>Проекты</h1>
    <button onClick={()=>swipeTo(list)}>Вперед</button>
    <button onClick={()=>swipeBack(list)}>Назад</button>
    <ImgContainer>
        <DisplayImg src={Imgs}>
          <DisplayWrapper>
            <SliderCutter ref={myRef}>
              {
                list.map(el => 
                  <SlideImg src={`http://api.alexweber.ru/${el.previmg}`} />
                )
              }
            </SliderCutter>
          </DisplayWrapper>
        </DisplayImg>
    </ImgContainer>
  </ProjectsWrapper>
})