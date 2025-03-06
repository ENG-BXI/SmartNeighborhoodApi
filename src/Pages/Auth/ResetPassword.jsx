import React from 'react';
import {logoImage} from '../../Assets/Images';
import { useNavigate } from 'react-router';

const ResetPassword = () => {
  let nav = useNavigate();
  return (
    <div className='d-flex flex-column align-items-center justify-content-center vw-100 vh-100 position-relative'>
      <div className='w-25 text-center'>
        <h3 className='mb-2'>إعادة تعيين كلمة المرور</h3>
        <p className='mb-4'>يرجى ادخال الايميل لاعادة تعيين كلمة المرور</p>
        <form>
          <input className='form-control mb-4' placeholder='ادخل ايميلك' type='email' />
          <button onClick={()=>nav("/email-verification-code")} className='w-100 justify-content-center'>التالي</button>
        </form>
      </div>
      <img style={{top: '3rem', right: '2rem'}} src={logoImage} className='position-absolute' alt='LogoImage' />
    </div>
  );
};

export default ResetPassword;
