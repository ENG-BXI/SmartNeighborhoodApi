import React, { useState} from 'react';
import FormGroupDashBoard from '../../../Components/FormGroupDashBoard';
import HeaderBuilding from '../../../Components/HeaderBuilding';
import {useNavigate} from 'react-router';
import axios from 'axios';
import {ADD_BLOCK, BASEURL} from '../../../Api/EndPoint';

const AddNewSquare = () => {
  let nav = useNavigate();
  let [formData, setFormData] = useState({name: null, personId: null, email: null, password: null});
  let [loading ,setLoading] = useState(false)
  function handleSubmit() {
    setLoading(true)
    axios
      .post(`${BASEURL}/${ADD_BLOCK}`, formData)
      .then(data => {
        nav('/');
      })
      .catch(err => console.log(err));
  }


  return (
    <>
      <HeaderBuilding title={'اضافة مربع سكني'} />
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
        className='d-flex w-50 mx-auto flex-column align-items-center text-center row-gap-4 mt-3'
      >
        <div className='w-100'>
          <h3 className='mb-3'>اسم المربع السكني</h3>
          <FormGroupDashBoard data={formData} id='name' setValue={setFormData} inputType='text' customClass={['mb-3']} placeHolder={'مثلا : مربع محمد سامي'} />
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
              value={formData.personId ?? 'default'}
              onChange={e => {
                setFormData({...formData, personId: e.target.value});
              }}
              id='admin'
            >
              {/* get all person from api */}
              <option value='default' disabled>
                اختر مسئولا
              </option>
              <option value='0'>محمد سالم</option>
              <option value='0'>خالد عمر</option>
              <option value='0'>محمد رياض </option>
              <option value='0'>صالح منصور</option>
            </select>
          </div>
          <FormGroupDashBoard label='ايميل' data={formData} id='email' setValue={setFormData} inputType='email' customClass={['mb-3']} placeHolder={'اسم المستخدم'} />
          <FormGroupDashBoard label='كلمة المرور' data={formData} id='password' setValue={setFormData} customClass={['mb-3']} inputType='password' placeHolder={'كلمة المرور'} />
          <button className='w-100 mb-3 '>إضافة</button>
          {loading && <p>loading ...</p>}
          <button className='alt-button w-100 btn'>الفاء</button>
        </div>
      </form>
    </>
  );
};

export default AddNewSquare;
