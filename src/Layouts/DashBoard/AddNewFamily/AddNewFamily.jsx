import React from 'react';
import './AddNewFamily.css';
import HeaderBuilding from '../../../Components/HeaderBuilding';
import FormGroupDashBoard from '../../../Components/FormGroupDashBoard';
import { useNavigate } from 'react-router';
const AddNewFamily = () => {
  let nav = useNavigate();
  return (
    <>
      <HeaderBuilding title={'اضافة اسرة'} />
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
        className='d-flex w-50 mx-auto flex-column align-items-center text-center row-gap-3 mt-3'
      >
        <div className='w-100'>
          <h3 className='mb-3'>اسم الاسرة</h3>
          <FormGroupDashBoard customClass={['mb-3']} placeHolder={'مثلا : عائلة الاحمدي'} />
        </div>
        <div className='w-100'>
          <h3 className='mb-3'>رب الاسرة</h3>
          {/* select */}
          <div className='text-end mb-3'>
            <label className='form-label ' htmlFor=''>
              تحديد رب الاسرة
            </label>
            <select className='form-select' id='' value='d'>
              <option value='d' disabled>
                اختر رب الاسرة
              </option>
              <option value='s'>sds</option>
              <option value='s'>sds</option>
              <option value='s'>sds</option>
              <option value='s'>sds</option>
            </select>
          </div>
          <button onClick={()=>{nav('/add-new-family-2');}} className='w-100 mb-3 '>التالي</button>
          <button onClick={()=>{nav(-1);}} className='alt-button w-100 btn'>الفاء</button>
        </div>
      </form>
    </>
  );
};

export default AddNewFamily;
