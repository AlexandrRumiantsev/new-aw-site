import React from "react";
import { UseHomeViewModelReturnType } from "../types";
import  Imgs  from "../../../assets/images/main-photo.png";
//import  Imgs2  from "../../../assets/text/fio.svg";
import { AnyObject } from "yup/lib/types";
import { ContainerStyled, PictureStyled, ImgBox, InfoBlock, TitleFIO, BaseFont, ScrollPageWrapper } from "./styles"

import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import styled from "styled-components";
import { Projects } from '../../../components/Projects/index'

import { Observer } from 'mobx-react' // 6.x or mobx-react-lite@1.4.0


const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());
const FadeUpx = batch( MoveIn(), Zoom());

import { GET_LIST } from '../../../stores/projects-store/actions'

// Make custom animation
const Spin = (cycle: number) =>
({
  in: {
    style: {
     
    },
  },
  out: {
    style: {
    
    },
  },
} as unknown as AnyObject);

const myRef = React.createRef<HTMLDivElement>();

const scroll = (number: any, event: any) => {
  event.preventDefault();
  window.scrollTo(0, window.innerHeight * number);
}


export function HomeView() {  

 
  return (
    <ScrollContainer>
      <ScrollPageWrapper>
      <ScrollPage>
      <Animator animation={batch(Sticky(), Fade(), Spin(3))}>
      <ContainerStyled ref={myRef} id='main'>
        <InfoBlock>
          <h1 title="Заголовок страница">  
            
          </h1>
          <h2>
          За последние 7 лет работал в качестве разработчика с сопровождающего програмные продукты работал с крупными компаниями и небольшими веб-студиями, помогая им в разработке проектов, разного уровня сложности.
          </h2>
          <nav>
            <h4>
              <a href="#" onClick={(e) => {scroll(1, e)}}>
                <BaseFont>Посмотреть проекты</BaseFont>
              </a>
            </h4>
            <span>
              <BaseFont >
                <BaseFont>или же</BaseFont>
              </BaseFont>
            </span>
            <h4>
              <a href="#" onClick={(e) => {scroll(2, e)}}>
                  <BaseFont>Читать обо мне</BaseFont>
              </a>
            </h4>
          </nav>
        </InfoBlock>
        <ImgBox>
          <PictureStyled img={Imgs}/>
        </ImgBox>
      </ContainerStyled>
      </Animator>
      </ScrollPage>
      </ScrollPageWrapper>

      <ScrollPage>
        <Animator animation={FadeUp}>
          {
            <Projects/>
          }
        </Animator>
      </ScrollPage>

      <ScrollPage>
        <Animator animation={FadeUpx}>
        <ul className="older">
          <li><a href="#">Элемент списка</a></li>
          <li><a href="#">Элемент списка</a></li>
          <li><a href="#">Элемент списка</a></li>
          <li><a href="#">Элемент списка</a></li>
          <li><a href="#">Элемент списка</a></li>
        </ul>
        </Animator>
      </ScrollPage>
  </ScrollContainer>
  )
}

