import React, {useRef} from 'react';
import './Building.css';
import {Neighborhood_1, Neighborhood_1_Person, Neighborhood_2, Neighborhood_2_Person, Neighborhood_3, Neighborhood_3_Person} from '../../../Assets/Images';
import NeighborhoodCard from '../../../Components/NeighborhoodCard';
import { useNavigate } from 'react-router';

let neighborhoodData = [
  {Image: Neighborhood_1, Neighborhood: 'حي المتضررين', NeighborhoodPersonProfile: Neighborhood_1_Person, PersonName: 'عبدالله سالم', NumberOfFamily: '210'},
  {Image: Neighborhood_2, Neighborhood: 'حي الانشاءات', NeighborhoodPersonProfile: Neighborhood_2_Person, PersonName: 'منير عبدالرؤوف', NumberOfFamily: '307'},
  {Image: Neighborhood_3, Neighborhood: 'حي المساكن', NeighborhoodPersonProfile: Neighborhood_3_Person, PersonName: 'اسماعيل زكريا', NumberOfFamily: '654'}
];
const Building = () => {
  let ToggleButton = useRef(null);
  let nav = useNavigate();
  function handleToggle() {
    ToggleButton.current.classList.toggle('show');
  }
  return (
    <div className='building'>
      <div className='d-flex align-items-center column-gap-3 my-4'>
        <h2 className='mb-0'>الوحدات السكنية</h2>
        <div className='dropdown'>
          <button onClick={handleToggle} className='toggle d-flex align-items-center justify-content-center dropdown-toggle'>+</button>
          <div ref={ToggleButton} className='dropdown-menu text-center'>
            <button onClick={()=>nav("/add-new-square")} className='btn btn-sm border-0'> اضافة مربع سكني </button>
            <div className='dropdown-divider'></div>
            <button onClick={()=>nav("/add-new-family")} className='btn btn-sm border-0'> اضافة اسرة</button>
            <div className='dropdown-divider'></div>
            <button onClick={()=>nav("/add-new-person")} className='btn btn-sm border-0'> اضافة شخص</button>
          </div>
        </div>
      </div>
      {/* <PlaceInLine /> */}
      <div className='d-flex column-gap-2'>
        {neighborhoodData.map((element, index) => (
          <NeighborhoodCard key={index} Neighborhood={element.Neighborhood} NeighborhoodPersonProfile={element.NeighborhoodPersonProfile} NumberOfFamily={element.NumberOfFamily} PersonName={element.PersonName} Image={element.Image} />
        ))}
      </div>
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
