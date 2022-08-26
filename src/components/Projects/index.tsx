import React from 'react'

import Imgs from "../../assets/images/display.png";
import { useStores } from '../../utils/use-stores/use-stores'
import { observer } from "mobx-react";

export const Projects = observer(() => {
  const { projects: {list, status} } = useStores()

  return <>
    <h1>Проекты</h1>
    <img src={Imgs} alt="x" />
    {
       list.map((el) => <div>sss</div>)
    }
  </>
})