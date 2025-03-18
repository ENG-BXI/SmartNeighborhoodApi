import React, {useEffect, useState} from 'react';
import SideBar from '../../Components/SideBar/SIdeBar';
import {Outlet} from 'react-router';
import HeaderDashBoard from '../../Components/HeaderDashBoard/HeaderDashBoard';
import LoadingPage from '../LoadingPage';
import ChatBot from '../../Components/ChatBot/ChatBot';
const DashBoard = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });

  return (
    <div className='d-flex min-vh-100'>
      <SideBar />
      <div className='w-100'>
        <HeaderDashBoard />
        <div className='px-4'>
          <Outlet />
          <ChatBot />
        </div>
      </div>
      {isLoading && <LoadingPage />}
    </div>
  );
};

export default DashBoard;
