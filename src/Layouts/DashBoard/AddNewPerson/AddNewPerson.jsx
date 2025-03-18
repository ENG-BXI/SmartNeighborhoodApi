import React, {useContext} from 'react';
import HeaderBuilding from '../../../Components/HeaderBuilding';
import FormGroupDashBoard from '../../../Components/FormGroupDashBoard';
import {useNavigate} from 'react-router';
import {storeData} from '../../../Hook/StoreDataContext';

const AddNewPerson = () => {
  let nav = useNavigate();
  let {data, setData} = useContext(storeData);

  return (
    <>
      <HeaderBuilding title={'اضافة فرد'} />
      <form
        onSubmit={e => {
          e.preventDefault();
          nav('/add-new-person-2');
        }}
        className='d-flex w-50 mx-auto flex-column align-items-center text-center row-gap-4 mt-3'
      >
        <div className='w-100'>
          <h3 className='mb-3'>البيانات الشخصية</h3>
          <FormGroupDashBoard label='الاسم الرباعي' isRequired={true} data={data} id='fullName' inputType='text' setValue={setData} customClass={['mb-4']} placeHolder={'الاسم الرباعي'} />
          <FormGroupDashBoard label='الايميل' isRequired={true} data={data} id='email' inputType='email' setValue={setData} customClass={['mb-4']} placeHolder={'اسم المستخدم'} />
          <FormGroupDashBoard label='رقم الجوال' isRequired={true} data={data} id='phoneNumber' setValue={setData} customClass={['mb-4']} inputType='number' placeHolder={'رقم الجوال'} />
          <button className='w-100 mb-3 '>التالي</button>
          <button
            onClick={() => {
              nav(-1);
            }}
            className='alt-button w-100 btn'
          >
            الفاء
          </button>{' '}
        </div>
      </form>
    </>
  );
};

export default AddNewPerson;
