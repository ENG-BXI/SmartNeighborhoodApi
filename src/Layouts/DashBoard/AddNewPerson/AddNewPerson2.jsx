import React, {useContext} from 'react';
import FormGroupDashBoard from '../../../Components/FormGroupDashBoard';
import HeaderBuilding from '../../../Components/HeaderBuilding';
import {useNavigate} from 'react-router';
import {storeData} from '../../../Hook/StoreDataContext';
import axios from 'axios';
import {BASEURL, GET_ALL_FAMILY} from '../../../Api/EndPoint';

const AddNewPerson2 = () => {
  let nav = useNavigate();
  let {data, setData} = useContext(storeData);
  console.log(data);
  function d() {
    axios.get(`${BASEURL}/${GET_ALL_FAMILY}`).then(data => console.log(data));
  }
  d();
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
          <div className='text-end mb-4'>
            <label className='mb-2' htmlFor=''>
              نوع الهوية
            </label>
            <div className='d-flex column-gap-2 justify-content-between'>
              {/* select */}
              <select className='form-select w-50' value={data['typeOfIdentity'] ?? 'default'} onChange={e => setData({...data, typeOfIdentity: e.target.value})} id='typeOfIdentity'>
                <option value='default' disabled>
                  نوع الهوية
                </option>
                <option value='ID_C'>بطاقة</option>
                <option value='PASS'>جواز سفر</option>
              </select>
              <FormGroupDashBoard data={data} id='identityNumber' setValue={setData} inputType='number' placeHolder={'رقم الهوية'} />
            </div>
          </div>
          <FormGroupDashBoard label='تاريخ الميلاد' isDate data={data} id='dateOfBirth' setValue={setData} inputType='date' customClass={['mb-4']} placeHolder={'الاسم الرباعي'} />
          <div className='text-end mb-4'>
            <label className='mb-2' htmlFor=''>
              فصيلة الدم
            </label>
            {/* select */}
            <select className='form-select ' value={data['bloodType'] ?? 'default'} onChange={e => setData({...data, bloodType: e.target.value})} id='bloodType'>
              <option value='default' disabled>
                حدد فصيلة دمك
              </option>
              <option value='A+'>A+</option>
              <option value='A-'>A-</option>
              <option value='B+'>B+</option>
              <option value='B-'>B-</option>
              <option value='AB+'>AB+</option>
              <option value='AB-'>AB-</option>
              <option value='O+'>O+</option>
              <option value='O-'>O-</option>
            </select>
          </div>
          <div className='text-end mb-4'>
            <label className='mb-2' htmlFor=''>
              الجنس
            </label>
            <div style={{accentColor: 'var(--main-color)'}} className='d-flex column-gap-4'>
              <div className='d-flex column-gap-2'>
                <input type='radio' value={data.gender} onChange={e => setData({...data, gender: e.target.id})} id='0' name='gender' />
                <label htmlFor='0'>ذكر</label>
              </div>
              <div className='d-flex column-gap-2'>
                <input type='radio' value={data.gender} onChange={e => setData({...data, gender: e.target.id})} name='gender' id='1' />
                <label htmlFor='1'>انثى</label>
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              nav('/add-new-person-3');
            }}
            className='w-100 mb-3 '
          >
            التالي
          </button>
          <button
            onClick={() => {
              nav(-1);
            }}
            className='alt-button w-100 btn'
          >
            السابق
          </button>
        </div>
      </form>
    </>
  );
};

export default AddNewPerson2;
