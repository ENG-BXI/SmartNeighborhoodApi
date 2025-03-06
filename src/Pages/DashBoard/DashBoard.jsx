import React from 'react';
import SideBar from '../../Components/SideBar/SIdeBar';
import { Outlet } from 'react-router';

const DashBoard = () => {
  return (
    <div className='d-flex min-vh-100'>
      <SideBar />
        <Outlet/>
    </div>
  );
};

export default DashBoard;
