import React, { useContext } from 'react';
import './AddNewFamily.css';
import HeaderBuilding from '../../../Components/HeaderBuilding';
import FormGroupDashBoard from '../../../Components/FormGroupDashBoard';
import { useNavigate } from 'react-router';
import { storeData } from '../../../Hook/StoreDataContext';
const AddNewFamily = () => {
  let nav = useNavigate();
  let { data, setData } = useContext(storeData);
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
          <FormGroupDashBoard data={data} setValue={setData} inputType='text' id='name' customClass={['mb-3']} placeHolder={'مثلا : عائلة الاحمدي'} />
        </div>
        <div className='w-100'>
          <h3 className='mb-3'>رب الاسرة</h3>
          {/* select */}
          <div className='text-end mb-3'>
            <label className='form-label ' htmlFor=''>
              تحديد رب الاسرة
            </label>
            <select className='form-select' id='familyCategory' value={data.familyCatgoryId} onChange={e => setData({...data, familyCatgoryId:e.target.value})}>
              <option value='d' disabled>
                اختر رب الاسرة
              </option>
              <option value='s1'>sds</option>
              <option value='s2'>sds</option>
              <option value='s3'>sds</option>
              <option value='s4'>sds</option>
            </select>
          </div>
          <button
            onClick={() => {
              nav('/add-new-family-2');
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
            الفاء
          </button>
        </div>
      </form>
    </>
  );
};

export default AddNewFamily;
