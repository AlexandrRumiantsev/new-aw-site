import styled from 'styled-components'



export const BaseFont = styled.div`

`

export const InfoBlock = styled.div`
  grid-column: 1 / 2;
  grid-row: 1;
  align-self: center;
  justify-self: end;
  h2{
    max-width: 550px;
    animation: moveFromLeft 2s forwards;
    animation-delay: 1s;
    opacity: 0;
    margin-left: -100px;
    @keyframes moveFromLeft {
      0% {
        opacity: 0;
        margin-left: -100px;
      }
      100% {
        opacity: 1;
        margin-left: 0;
      }
    } 

  }
  nav{
   
    animation: moveFromBottom 2s forwards;
    animation-delay: 4s;
    opacity: 0;
    margin-bottom: -100px;
    @keyframes moveFromBottom {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    } 
  }
`

export const ImgBox = styled.div`
  grid-column: 2 / 4;
  grid-row: 1;
  justify-self: start;
`

export const TitleFIO = styled.img<any>`
  font-size: 24px;
  background-size: contain;
  background-repeat: no-repeat;

`

export const PictureStyled = styled.div<any>`
  -webkit-filter: grayscale(50%); /* Safari 6.0 - 9.0 */
  filter: grayscale(50%);
  background-image: url(${(props) => props.img});
  height: 100vh;
  width: 100vh;
  /* you need to match the shadow color to your background or image border for the desired effect*/
  background-size: contain;
  background-repeat: no-repeat;
  float: right;
  position: relative;

  opacity: 0;
  animation: ani 5s forwards;

  &:after{
    box-shadow: 0 -10px 28px 28px white inset;
    max-width: 640px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255,255,255,.5);
  }

  @keyframes ani {
    0% {opacity: 0;}
    100% {opacity: 1;}
  } 
`

export const ScrollPageWrapper = styled.div`
  &:first-child{
    z-index: -1;
  }
`

export const ContainerStyled = styled.div`
  display: grid; 
  height: 100vh;
  grid-template-columns: 2fr 2fr;

`