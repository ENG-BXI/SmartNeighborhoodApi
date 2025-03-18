import React, {useEffect, useRef, useState} from 'react';
import './Building.css';
import {Neighborhood_1, Neighborhood_1_Person} from '../../../Assets/Images';
import NeighborhoodCard from '../../../Components/NeighborhoodCard';
import {useNavigate} from 'react-router';
import axios from 'axios';
import {BASEURL, GET_ALL_BLOCK} from '../../../Api/EndPoint';

// let neighborhoodData = [
//   {Image: Neighborhood_1, Neighborhood: 'حي المتضررين', NeighborhoodPersonProfile: Neighborhood_1_Person, PersonName: 'عبدالله سالم', NumberOfFamily: '210'},
//   {Image: Neighborhood_2, Neighborhood: 'حي الانشاءات', NeighborhoodPersonProfile: Neighborhood_2_Person, PersonName: 'منير عبدالرؤوف', NumberOfFamily: '307'},
//   {Image: Neighborhood_3, Neighborhood: 'حي المساكن', NeighborhoodPersonProfile: Neighborhood_3_Person, PersonName: 'اسماعيل زكريا', NumberOfFamily: '654'}
// ];
const Building = () => {
  let ToggleButton = useRef(null);
  let nav = useNavigate();
  let [neighborhoodData, setNeighborhoodData] = useState([]);
  function handleToggle() {
    ToggleButton.current.classList.toggle('show');
  }
  useEffect(() => {
    axios.get(`${BASEURL}/${GET_ALL_BLOCK}`).then(data => { setNeighborhoodData(data.data.data); console.log(data);
    });
  }, []);
  return (
    <div className='building'>
      <div className='d-flex align-items-center gap-3 my-4'>
        <h2 className='mb-0'>الوحدات السكنية</h2>
        <div className='dropdown'>
          <button onClick={handleToggle} className='toggle d-flex align-items-center justify-content-center dropdown-toggle'>
            +
          </button>
          <div ref={ToggleButton} className='dropdown-menu text-center'>
            <button onClick={() => nav('/add-new-square')} className='btn btn-sm border-0'>
              {' '}
              اضافة مربع سكني{' '}
            </button>
            <div className='dropdown-divider'></div>
            <button onClick={() => nav('/add-new-family')} className='btn btn-sm border-0'>
              {' '}
              اضافة اسرة
            </button>
            <div className='dropdown-divider'></div>
            <button onClick={() => nav('/add-new-person')} className='btn btn-sm border-0'>
              {' '}
              اضافة شخص
            </button>
          </div>
        </div>
      </div>
      {/* <PlaceInLine /> */}
      <div className='d-flex flex-wrap column-gap-2'>{neighborhoodData.length > 0 && neighborhoodData.map((element, index) => <NeighborhoodCard key={index} Neighborhood={element.name} NeighborhoodPersonProfile={Neighborhood_1_Person} NumberOfFamily={element.families.length  || "لاتوجد "} PersonName='عبدالله سالم' Image={Neighborhood_1} />)}</div>
    </div>
  );
};

// designer change this layout form ui in last change
// ==================================================
//
// function PlaceInLine() {
//   return (
//     <div className='place-in-line d-flex align-items-center justify-content-between position-relative mb-2'>
//       <p className=' fw-medium mb-1 px-2 bg-white'>المنطقة : فوة</p>
//       <button><span>+</span> إضافة مربع سكني</button>
//       <div className='line'></div>
//     </div>
//   );
// }

export default Building;
