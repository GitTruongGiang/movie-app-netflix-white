import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import DetailMoviePage from '../pages/DetailMoviePage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import ExploreMoviesPage from '../pages/ExploreMoviesPage'
import SearchPage from '../pages/SearchPage'

function Router() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/moviekind/:moviekindId" element={<ExploreMoviesPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Route>
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/movie/:movieId" element={<DetailMoviePage />} />
    </Routes>
  );
}

export default Router