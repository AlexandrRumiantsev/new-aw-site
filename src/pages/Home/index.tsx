import React from "react";

/** Views */
import { HomeView } from './views';

/** ViewModels */
import { useHomeViewModel } from "./viewModels/homeViewModel";

/** Components */
import Menu  from "../../components/Menu/"

const Home = () => {
  const viewModel = useHomeViewModel();

  return (
  	<>
	  	<Menu />
	    <HomeView  />
    </>
  );
};

export default Home