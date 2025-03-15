import React, {useEffect, useState} from 'react';
import SideBar from '../../Components/SideBar/SIdeBar';
import {Outlet} from 'react-router';
import HeaderDashBoard from '../../Components/HeaderDashBoard/HeaderDashBoard';
import LoadingPage from '../LoadingPage';
// import axios from 'axios';
// import {ADD_BLOCK, BASEURL, GET_ALL_BLOCK} from '../../Api/EndPoint';

const DashBoard = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });
  // function getBlocks() {
  //   let res = axios
  //     .get(`${GET_ALL_BLOCK}`)
  //     .then(data => {
  //       console.log(data);
  //     })
  //     .catch(err => {
  //       console.log('err ======', err);
  //     });
  // }
  // function addBlock() {
  //   axios.post(`${ADD_BLOCK}`, {
  //     name: 'ewrewtfdf',
  //     userId: 'dfdsfdsf'
  //   }).then((data) => {
  //     console.log(data);
      
  //   }).catch((err) => {
  //     console.log("err=====" ,err);
      
  //   });
  // }
  // addBlock()
  // getBlocks();

  return (
    <div className='d-flex min-vh-100'>
      <SideBar />
      <div className='w-100'>
        <HeaderDashBoard />
        <div className='px-4'>
          <Outlet />
        </div>
      </div>
      {isLoading && <LoadingPage />}
    </div>
  );
};

export default DashBoard;
