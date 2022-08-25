import styled from 'styled-components'

import { TEXT_COLOR_0_7_WHITE } from '~/globals'

export const MenuNavigation = styled.nav`
  right: 0;
  position: fixed;
  width: 50%;
  float: right;
  z-index: 2;
`

export const MenuToogler = styled.div`
  display: block;
  position: relative;
  top: -60px;
  left: -30px;
  z-index: 1;
  -webkit-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  float: right;
`

export const MenuTooglerLink= styled.a`
  text-decoration: none;
  color: #232323;
  transition: color 0.3s ease;
  &:hover{
    color: white;
    & > li{
      background: black;
    }
  }
`

export const MenuTooglerInput= styled.input`
  display: block;
  width: 40px;
  height: 32px;
  position: fixed;
  top: 23px;
  right: 25px;
  
  cursor: pointer;
  
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  
  -webkit-touch-callout: none;

  &:checked ~ span
  {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }

  &:checked ~ span:nth-last-child(3){
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  &:checked ~ span:nth-last-child(2){
  transform: rotate(-45deg) translate(0, -1px);
  }
  &:checked ~ ul{
    transform: none;
  }
`

export const MenuTooglerSpan= styled.span`
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  
  background: #cdcdcd;
  border-radius: 3px;
  
  z-index: 1;
  
  transform-origin: 4px 0px;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;

    &:first-child{
      transform-origin: 0% 0%;
    }

    &:nth-last-child(2){
      transform-origin: 0% 100%;
    }
`

export const MenuContiner = styled.ul`
  position: absolute;
  min-width: 300px;
  margin: -100px 0 0 -200px;
  padding: 50px 0;
  padding-top: 125px;
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(100%, 0);
  height: 100vh;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
`

export const MenuContinerLi = styled.li`
  font-size: 22px;
  padding: 40px 75px;
`