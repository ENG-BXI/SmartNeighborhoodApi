import React from 'react';
import {AppleLogo, FacebookLogo, GoogleLogo, LoginImage, logoImage} from '../../Assets/Images';
import LoginWith from '../../Components/LoginWith';
import { useNavigate } from 'react-router';

const Login = () => {
  let nav = useNavigate();
  return (
    <div className='d-flex column-gap-4 align-items-center justify-content-center w-100 position-relative'>
      <div style={{ width:"400px"}} className='position-relative'>
        <h3 className='text-center'>مرحبا بك في</h3>
        <h2 className='text-center mb-5'>الحارة الذكية</h2>
        <form>
          <input type='text' placeholder='اسم المستخدم' className='form-control mb-3' />
          <input type='password' placeholder='كلمة المرور' className='form-control mb-3' />
          <p  onClick={()=>nav("/reset-password")} className='text-start mb-5'>نسيت كلمة المرور ؟</p>
          <button className='w-100 justify-content-center'>تسجيل الدخول</button>
        </form>
        <div className='my-4'>
          <div className='line'></div>
          <p style={{width: 'min-content'}} className='fw-bold py-1 px-2 bg-white mx-auto'>
            او
          </p>
        </div>
        <LoginWith logo={GoogleLogo} title='تسجيل الدخول عن طريق الايميل' />
        <LoginWith logo={AppleLogo} title='تسجيل الدخول عن طريق حساب ابل' />
        <LoginWith logo={FacebookLogo} title='تسجيل الدخول عن طريق حساب فيسبوك' />
      </div>
      <img src={LoginImage} style={{height: '700px'}} alt='LoginImage' />
      <img style={{top: '3rem', right: '2rem'}} src={logoImage} className='position-absolute' alt='LogoImage' />
    </div>
  );
};

export default Login;

