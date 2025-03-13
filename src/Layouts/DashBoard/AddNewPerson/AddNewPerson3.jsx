import React, {useRef} from 'react';
import HeaderBuilding from '../../../Components/HeaderBuilding';
import {useNavigate} from 'react-router';
import {ImageUpload} from '../../../Assets/Images';

const AddNewPerson3 = () => {
  let nav = useNavigate();
  let FileRef = useRef(null);
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
              دور الفرد
            </label>
            {/* select */}
            <select className='form-select' id='' value='d'>
              <option value='d' disabled>
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
                <input type='radio' name='status' id='m' />
                <label htmlFor='m'>متزوج</label>
              </div>
              <div className='d-flex column-gap-2'>
                <input type='radio' name='status' id='f' />
                <label htmlFor='s'>اعزب</label>
              </div>
            </div>
          </div>
          <input hidden ref={FileRef} type='file' />
          <div
            style={{cursor: 'pointer'}}
            onClick={() => {
              FileRef.current.click();
            }}
            className='bg-body-secondary py-5 rounded-4 mb-5'
          >
            <img src={ImageUpload} alt='ImageUpload' />
            <p>انقر لرفع الصورة الشخصية</p>
          </div>
          <button
            onClick={() => {
              nav('/');
            }}
            className='w-100 mb-3 '
          >
            إضافة{' '}
          </button>
          <button
            onClick={() => {
              nav(-1);
            }}
            className='alt-button w-100 btn'
          >
            السابق
          </button>{' '}
        </div>
      </form>
    </>
  );
};

export default AddNewPerson3;
