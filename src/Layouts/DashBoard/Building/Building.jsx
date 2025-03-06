import React from 'react';
import './Building.css';
import {Neighborhood_1, Neighborhood_1_Person, Neighborhood_2, Neighborhood_2_Person, Neighborhood_3, Neighborhood_3_Person, PersonIcon} from '../../../Assets/Images';
import NeighborhoodCard from '../../../Components/NeighborhoodCard';

let neighborhoodData = [
  {Image: Neighborhood_1, Neighborhood: 'حي المتضررين', NeighborhoodPersonProfile: Neighborhood_1_Person, PersonName: 'عبدالله سالم', NumberOfFamily: '210'},
  {Image: Neighborhood_2, Neighborhood: 'حي الانشاءات', NeighborhoodPersonProfile: Neighborhood_2_Person, PersonName: 'منير عبدالرؤوف', NumberOfFamily: '307'},
  {Image: Neighborhood_3, Neighborhood: 'حي المساكن', NeighborhoodPersonProfile: Neighborhood_3_Person, PersonName: 'اسماعيل زكريا', NumberOfFamily: '654'}
];
const Building = () => {
  return (
    <div>
      <h2 className='my-4'>الوحدات السكنية</h2>
      <PlaceInLine />
      <div className='d-flex column-gap-2'>
        {neighborhoodData.map((element, index) => (
          <NeighborhoodCard key={index} Neighborhood={element.Neighborhood} NeighborhoodPersonProfile={element.NeighborhoodPersonProfile} NumberOfFamily={element.NumberOfFamily} PersonName={element.PersonName} Image={element.Image} />
        ))}
      </div>
    </div>
  );
};

function PlaceInLine() {
  return (
    <div className='place-in-line d-flex align-items-center justify-content-between position-relative mb-2'>
      <p className=' fw-medium mb-1 px-2 bg-white'>المنطقة : فوة</p>
      <button><span>+</span> إضافة مربع سكني</button>
      <div className='line'></div>
    </div>
  );
}

export default Building;
