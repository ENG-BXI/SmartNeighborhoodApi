import React, {useContext, useState} from 'react';
import HeaderBuilding from '../../../Components/HeaderBuilding';
import {useNavigate} from 'react-router';
import {storeData} from '../../../Hook/StoreDataContext';
import axios from 'axios';
import {ADD_PERSON, BASEURL} from '../../../Api/EndPoint';

const AddNewPerson3 = () => {
  let nav = useNavigate();
  let { data, setData } = useContext(storeData);
  let [loading, setLoading] = useState(false);

  function handelSubmit() {
    setLoading(true)
    axios
      .post(`${BASEURL}/${ADD_PERSON}`, {
        ...data,
        familyMembers: [
          {
            familyId: 1,
            memberTypeId: 1
          }
        ]
      })
      .then(data => {
        console.log(data);
        setData({});
        nav("/")
      })
      .catch(err => {
        console.log(err);
      }).finally(() => {
        setLoading(false)
      });
  }
  return (
    <>
      <HeaderBuilding title={'اضافة فرد'} />
      <form
        onSubmit={e => {
          e.preventDefault();
          handelSubmit();
        }}
        className='d-flex w-50 mx-auto flex-column align-items-center text-center row-gap-4 mt-3'
      >
        <div className='w-100'>
          <h3 className='mb-3'>البيانات الشخصية</h3>
          <div className='text-end mb-4'>
            <label className='mb-2' htmlFor='job'>
              دور الفرد
            </label>
            {/* select */}
            <select
              value={data.job ?? 'default'}
              onChange={e => {
                setData({...data, job: e.target.value});
              }}
              className='form-select'
              id='job'
            >
              <option value='default' disabled>
                حدد ماهو دورك
              </option>
              <option value='s1'>?</option>
              <option value='s2'>??</option>
            </select>
          </div>
          <div className='text-end mb-4'>
            <label className='mb-2' htmlFor=''>
              الحالة الاجتماعية
            </label>
            <div style={{accentColor: 'var(--main-color)'}} className='d-flex column-gap-4'>
              <div className='d-flex column-gap-2'>
                <input type='radio' value={data.status} onChange={e => setData({...data, status: e.target.id})} id='m' name='status' />
                <label htmlFor='m'>متزوج</label>
              </div>
              <div className='d-flex column-gap-2'>
                <input type='radio' value={data.status} onChange={e => setData({...data, status: e.target.id})} name='status' id='f' />
                <label htmlFor='s'>اعزب</label>
              </div>
            </div>
          </div>
          <button className='w-100 mb-3 '>إضافة </button>
          {loading && <p>loading ...</p>}
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

export default AddNewPerson3;
