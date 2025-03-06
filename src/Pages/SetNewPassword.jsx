import React from 'react'
import { logoImage } from '../Assets/Images';

const SetNewPassword = () => {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center vw-100 vh-100 position-relative'>
      <div style={{width: '300px'}} className=' text-center'>
        <h3 className='mb-3'>تعيين كلمة مرور جديدة</h3>
        <p className='mb-4'>يجب ان تكون كلمة المرور الجديدة مختلفة عن السابقة</p>
        <form>
          <input type='password' className='form-control mb-3' placeholder='كلمة المرور الجديدة'  />
          <input type='password' className='form-control mb-4' placeholder='اعد كتابة كلمة المرور'  />
          <button className='w-100 justify-content-center'>التالي</button>
        </form>
      </div>
      <img style={{top: '3rem', right: '2rem'}} src={logoImage} className='position-absolute' alt='LogoImage' />
    </div>
  );
}

export default SetNewPassword