import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Loading from './components/Loading'
import { GlobalStyle } from './globals'
import {Provider} from "mobx-react";
import { projectsStore } from "./stores/projects-store/projects-store";

const container = document.getElementById('root')
const root = createRoot(container)

const stores = {
  projectsStore
};

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Suspense fallback={<Loading />}>
      <Provider {...stores}>
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>
)