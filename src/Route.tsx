import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Home = React.lazy(() => import('./pages/home'))

export const AppRoute = () => {
  const BASENAME = process.env.NODE_ENV === 'development' ? '/' : '/react-18-typescript' // because of github pages

  return (
    <BrowserRouter basename={BASENAME}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}