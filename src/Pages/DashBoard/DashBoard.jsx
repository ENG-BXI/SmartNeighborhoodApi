import React from 'react';
import SideBar from '../../Components/SideBar/SIdeBar';
import {Outlet} from 'react-router';
import HeaderDashBoard from '../../Components/HeaderDashBoard/HeaderDashBoard';

const DashBoard = () => {
  return (
    <div className='d-flex min-vh-100'>
      <SideBar />
      <div className='w-100'>
        <HeaderDashBoard />
        <div className='px-4'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
