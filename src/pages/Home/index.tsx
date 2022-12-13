import React from "react";

/** Views */
import { HomeView } from './components/index';


/** Components */
import Menu  from "../../components/menu/"

const Home = () => {
  //const viewModel = useHomeViewModel();

  return (
  	<>
	  	<Menu />
	    <HomeView  />
    </>
  );
};

export default Home