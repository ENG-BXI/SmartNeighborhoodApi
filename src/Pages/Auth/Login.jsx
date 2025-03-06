import React from 'react';
import {AppleLogo, FacebookLogo, GoogleLogo, LoginImage} from '../../Assets/Images';

const Login = () => {
  return (
    <div className='container d-flex align-items-center justify-content-center w-100 position-relative'>
      <div style={{flex: '1'}} className='position-relative'>
        <h3 className='text-center'>مرحبا بك في</h3>
        <h2 className='text-center mb-5'>الحارة الذكية</h2>
        <form>
          <input type='text' placeholder='اسم المستخدم' className='form-control mb-3' />
          <input type='password' placeholder='كلمة المرور' className='form-control mb-3' />
          <p className='text-start mb-5'>نسيت كلمة المرور ؟</p>
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
      <img src={LoginImage} style={{flex: '2' , height:"400px"}} alt='LoginImage' />
    </div>
  );
};

export default Login;

function LoginWith(props) {
  return (
    <div className='d-flex align-items-center column-gap-3 border rounded px-3 py-1 shadow-sm mb-3'>
      <img src={props.logo} alt={props.logo} />
      <p className='mb-1'>{props.title}</p>
    </div>
  );
}
