import React from 'react'
import { Outlet } from 'react-router-dom';
import MainFooter from './MainFooter'
import MainHeader from './MainHeader'

function MainLayout() {

  return (
    <div className='app-container'>
      <MainHeader />
      <Outlet/>
      <MainFooter />
    </div>
  );
}

export default MainLayout