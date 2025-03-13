import React from 'react'
import { useNavigate } from 'react-router';

const HeaderBuilding = ({title}) => {
    let nav = useNavigate();
  return (
    <header className='d-flex justify-content-between align-items-center mt-3'>
          <h4 className='mb-0'>{title}</h4>
      <i onClick={() => nav(-1)} style={{cursor: 'pointer'}} className='fs-2 ri-arrow-left-s-line'></i>
    </header>
  );
}

export default HeaderBuilding