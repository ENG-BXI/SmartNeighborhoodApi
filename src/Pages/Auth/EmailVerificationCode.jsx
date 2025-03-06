import React, {useRef, useState} from 'react';
import {logoImage} from '../../Assets/Images';
import { useNavigate } from 'react-router';

const EmailVerificationCode = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputsRef = useRef([]);
    let nav = useNavigate();

  const handleChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // الانتقال إلى الحقل التالي إذا تم إدخال رقم
      if (value && index < 5) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && index > 0 && !otp[index]) {
      inputsRef.current[index - 1].focus(); 
    }
  };
  // Submit
  const handleSubmit = e => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    alert(`تم إدخال الرمز: ${enteredOtp}`);

  };
  return (
    <div className='d-flex flex-column align-items-center justify-content-center vw-100 vh-100 position-relative'>
      <div style={{width:"300px"}} className=' text-center'>
        <h3 className='mb-3'>تم ارسال كود الى ايميلك</h3>
        <p className='mb-0'>الرجاء ادخال رمز الكود الذي تم ارساله الى</p>
        <h5 className='mb-4'>ahmed.khaled@gmail.com</h5>
        <form>
          <div className='d-flex justify-content-center mb-4'>
            {otp.map((digit, index) => (
              <input key={index} type='text' className='form-control mx-1 text-center' style={{width: '40px', fontSize: '18px'}} value={digit} onChange={e => handleChange(index, e.target.value)} onKeyDown={e => handleKeyDown(index, e)} maxLength={1} ref={el => (inputsRef.current[index] = el)} required />
            ))}
          </div>
          <button onClick={()=>nav('/set-new-password')} className='w-100 justify-content-center'>التالي</button>
        </form>
        <p className='mt-3'>
          إعادة ارسال الكود بعد : <span className='fw-bold'>00:35</span>
        </p>
      </div>
      <img style={{top: '3rem', right: '2rem'}} src={logoImage} className='position-absolute' alt='LogoImage' />
    </div>
  );
};

export default EmailVerificationCode;
