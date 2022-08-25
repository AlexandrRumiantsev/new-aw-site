import React from 'react'

import {
  MenuToogler,
  MenuTooglerLink,
  MenuTooglerInput,
  MenuTooglerSpan,
  MenuContiner,
  MenuNavigation,
  MenuContinerLi,
} from './styles'



const swipeDisplay = (to: string, from: string) => {

}

const Menu = () => {
  return <MenuNavigation role="navigation">
  <MenuToogler>
    <MenuTooglerInput type="checkbox" />
    <MenuTooglerSpan></MenuTooglerSpan>
    <MenuTooglerSpan></MenuTooglerSpan>
    <MenuTooglerSpan></MenuTooglerSpan>
    <MenuContiner>
      <MenuTooglerLink href="#">
      	<MenuContinerLi>
      		Главная
      	</MenuContinerLi>
      </MenuTooglerLink>
      <MenuTooglerLink href="#">
      	<MenuContinerLi>
      		Проекты
      	</MenuContinerLi>
      </MenuTooglerLink>
      <MenuTooglerLink href="#">
      	<MenuContinerLi>
      	  Обо мне
      	</MenuContinerLi>
      </MenuTooglerLink>
      <MenuTooglerLink href="#">
      	<MenuContinerLi>
      		Контакты
      	</MenuContinerLi>
      </MenuTooglerLink>
    </MenuContiner>
  </MenuToogler>
</MenuNavigation>
}

export default Menu
