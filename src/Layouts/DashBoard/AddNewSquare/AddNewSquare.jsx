import React, { useState } from 'react';
import FormGroupDashBoard from '../../../Components/FormGroupDashBoard';
import HeaderBuilding from '../../../Components/HeaderBuilding';
import {useNavigate} from 'react-router';

const AddNewSquare = () => {
  let nav = useNavigate();
  let [formData, setFormData] = useState({ "blockName": null, "admin": null, "userName": null, "password": null });
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
          <FormGroupDashBoard data={formData} id='blockName' setValue={setFormData} inputType='text' customClass={['mb-3']} placeHolder={'مثلا : مربع محمد سامي'} />
        </div>
        <div className='w-100'>
          <h3 className='mb-4'>مسئول المربع السكني</h3>
          {/* select */}
          <div className='text-end mb-3'>
            <label className='form-label ' htmlFor=''>
              تحديد المسئول
            </label>
            <select
              className='form-select'
              value={formData.admin ?? 'default'}
              onChange={e => {
                setFormData({...formData, admin: e.target.value});
              }}
              id='admin'
            >
              <option value='default' disabled>
                اختر مسئولا
              </option>
              <option value='s1'>sds</option>
              <option value='s2'>sds</option>
              <option value='s3'>sds</option>
              <option value='s4'>sds</option>
            </select>
          </div>
          <FormGroupDashBoard label='اسم المستخدم' data={formData} id='userName' setValue={setFormData} customClass={['mb-3']} placeHolder={'اسم المستخدم'} />
          <FormGroupDashBoard label='كلمة المرور' data={formData} id='password' setValue={setFormData} customClass={['mb-3']} inputType='password' placeHolder={'كلمة المرور'} />
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
      </form>
    </>
  );
};

export default AddNewSquare;
