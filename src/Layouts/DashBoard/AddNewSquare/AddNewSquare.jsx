import React from 'react';
import FormGroupDashBoard from '../../../Components/FormGroupDashBoard';
import HeaderBuilding from '../../../Components/HeaderBuilding';
import {useNavigate} from 'react-router';

const AddNewSquare = () => {
  let nav = useNavigate();
  return (
    <>
      <HeaderBuilding title={'اضافة مربع سكني'} />
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
        className='d-flex w-50 mx-auto flex-column align-items-center text-center row-gap-4 mt-3'
      >
        <div className='w-100'>
          <h3 className='mb-3'>اسم المربع السكني</h3>
          <FormGroupDashBoard customClass={['mb-3']} placeHolder={'مثلا : مربع محمد سامي'} />
        </div>
        <div className='w-100'>
          <h3 className='mb-4'>مسئول المربع السكني</h3>
          {/* select */}
          <div className='text-end mb-3'>
            <label className='form-label ' htmlFor=''>
              تحديد المسئول
            </label>
            <select className='form-select' id='' value='d'>
              <option value='d' disabled>
                اختر مسئولا
              </option>
              <option value='s'>sds</option>
              <option value='s'>sds</option>
              <option value='s'>sds</option>
              <option value='s'>sds</option>
            </select>
          </div>
          <FormGroupDashBoard label='اسم المستخدم' customClass={['mb-3']} placeHolder={'اسم المستخدم'} />
          <FormGroupDashBoard label='كلمة المرور' customClass={['mb-3']} inputType='password' placeHolder={'كلمة المرور'} />
          <button
            onClick={() => {
              nav('/');
            }}
            className='w-100 mb-3 '
          >
            إضافة
          </button>
          <button  onClick={() => {
              nav(-1);
            }} className='alt-button w-100 btn'>الفاء</button>
        </div>
      </form>
    </>
  );
};

export default AddNewSquare;
