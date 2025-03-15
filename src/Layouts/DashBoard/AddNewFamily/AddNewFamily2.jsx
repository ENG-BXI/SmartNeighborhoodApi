import React, { useContext } from 'react'
import HeaderBuilding from '../../../Components/HeaderBuilding';
import { useNavigate } from 'react-router';
import { AddNewFamilyPerson } from '../../../Assets/Images';
import { storeData } from '../../../Hook/StoreDataContext';

const AddNewFamily2 = () => {
  let nav = useNavigate();
    let { data, setData } = useContext(storeData);
  
  return (
    <>
      <HeaderBuilding title={'اضافة اسرة'} />
      <div className='d-flex w-50 mx-auto flex-column align-items-center text-center row-gap-3 mt-3'>
        <div className='w-100'>
          <h2 className='mb-4'>معلومات الاسرة</h2>
          <h4 className='mb-3'>اسم الاسرة</h4>
          <div className='d-flex justify-content-center column-gap-3 mb-3'>
            <h5 className='mb-0'>{data.name}</h5>
            <i class='ri-pencil-line'></i>
          </div>
        </div>
        <div className='w-100'>
          <h4 className='mb-3'>رب الاسرة</h4>
          <div className='bg-warning rounded-4 w-50 mx-auto py-2 bg-opacity-75 d-flex justify-content-center align-items-center column-gap-3 mb-4'>
            <img src={AddNewFamilyPerson} alt='AddNewFamilyPerson' />
            <h5 className='mb-0'>{data.familyCatgoryId}</h5>
            <i class='ri-close-circle-fill'></i>
          </div>
          <button
            onClick={() => {
              nav('/');
            }}
            className='w-100 mb-3 '
          >
            إضافة
          </button>
          <button
            onClick={() => {
              nav(-1);
            }}
            className='alt-button w-100 btn'
          >
            الفاء
          </button>
        </div>
      </div>
    </>
  );
}

export default AddNewFamily2