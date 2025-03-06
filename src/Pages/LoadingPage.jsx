import {useEffect} from 'react';
import {logoImage} from '../Assets/Images';

function LoadingPage() {
  document.body.style.overflow = 'hidden';
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'visible';
    };
  });
  return (
    <div className='loading-page bg-white vw-100 vh-100 position-absolute d-flex align-items-center justify-content-center'>
      <div className='d-flex row-gap-3 flex-column align-items-center justify-content-center'>
        <img className='logo-image' src={logoImage} width={'130px'} alt='logoImage' />
        <h3>الحارة الذكية</h3>
      </div>
    </div>
  );
}
export default LoadingPage;
