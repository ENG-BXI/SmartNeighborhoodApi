import { CloseIconInput, NotificationIcon, PersonImage, SearchIcon } from '../../Assets/Images';
import "./HeaderDashBoard.css"
function HeaderDashBoard() {
  return (
    <header className='header d-flex align-items-center justify-content-between'>
      {/* Search */}
      <div className='search-input d-flex align-items-center column-gap-2 rounded-5 px-3 py-2'>
        <img src={SearchIcon} alt='SearchIcon' />
        <input placeholder='إبحث عن اشخاص' type='text' />
        <img src={CloseIconInput} alt='CloseIconInput' />
      </div>

      {/* Notification */}
      <div className='h-100 my-0 d-flex align-items-center column-gap-3'>
        <div className='vertical-line'></div>
        <img src={NotificationIcon} alt='NotificationIcon' />
      </div>

      {/* Person Info */}
      <div className='d-flex align-items-center column-gap-3'>
        <div className='text-start'>
          <h4 className='mb-0 fs-6 fw-bold'>محمد سالم</h4>
          <p className='mb-0 fs-6'>عاقل حارة حي العمال</p>
        </div>
        <img src={PersonImage} alt='PersonImage' />
      </div>
    </header>
  );
}

export default HeaderDashBoard;
