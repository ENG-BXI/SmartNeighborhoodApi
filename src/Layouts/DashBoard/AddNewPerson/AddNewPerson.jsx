import React, {useContext} from 'react';
import HeaderBuilding from '../../../Components/HeaderBuilding';
import FormGroupDashBoard from '../../../Components/FormGroupDashBoard';
import {useNavigate} from 'react-router';
import {storeData} from '../../../Hook/StoreDataContext';

const AddNewPerson = () => {
  let nav = useNavigate();
  let {data, setData} = useContext(storeData);
  console.log(data);

  return (
    <>
      <HeaderBuilding title={'اضافة فرد'} />
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
        className='d-flex w-50 mx-auto flex-column align-items-center text-center row-gap-4 mt-3'
      >
        <div className='w-100'>
          <h3 className='mb-3'>البيانات الشخصية</h3>
          <FormGroupDashBoard label='الاسم الرباعي' data={data} id='fullName' inputType='text' setValue={setData} customClass={['mb-4']} placeHolder={'الاسم الرباعي'} />
          <FormGroupDashBoard label='الايميل' data={data} id='email' inputType='email' setValue={setData} customClass={['mb-4']} placeHolder={'اسم المستخدم'} />
          <FormGroupDashBoard label='رقم الجوال' data={data} id='phoneNumber'  setValue={setData} customClass={['mb-4']} inputType='number' placeHolder={'رقم الجوال'} />
          <div className='d-flex column-gap-4 mx-2 mb-5'>
            <div className='d-flex column-gap-2'>
              <input type='checkbox' className='form-check-input' id='call' />
              <label htmlFor='call'>اتصال</label>
            </div>
            <div className='d-flex column-gap-2'>
              <input type='checkbox' className='form-check-input' id='whatsapp' />
              <label htmlFor='whatsapp'>واتساب</label>
            </div>
          </div>
          <button
            onClick={() => {
              nav('/add-new-person-2');
            }}
            className='w-100 mb-3 '
          >
            التالي
          </button>
          <button className='alt-button w-100 btn'>الفاء</button>{' '}
        </div>
      </form>
    </>
  );
};

export default AddNewPerson;
