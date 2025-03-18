import {BiBuildings, FluentMegaphoneLoud, Hand, Handshake, HelpIcon, Iconanoon, logoImage, Logout, PersonIcon, Security, TaskList} from '../../Assets/Images';
import GroupTitle from './GroupTitle';
import './SideBar.css';
import SideBarItem from './SideBarItem';

// Items Data
let SideBarItemData = [
  {icon: BiBuildings, title: 'كشف عام للوحدة'},
  {icon: FluentMegaphoneLoud, title: 'الإعلانات'},
  {icon: PersonIcon, title: 'جلسات الصلح'},
  {icon: Handshake, title: 'الاتفاقات'},
  {icon: Hand, title: 'التعهدات'},
  {icon: Iconanoon, title: 'المساعدات', path: 'charitable'},
  {icon: Security, title: 'الامن'},
  {icon: TaskList, title: 'خطط الازمات'},
  {icon: HelpIcon, title: 'المناشدات'}
];
function SideBar() {
  return (
    <aside className='px-4 py-5 text-white'>
      <div className='d-flex align-items-center column-gap-2'>
        <img src={logoImage} alt='LogoImage' />
        <h3>الحارة الذكية</h3>
      </div>
      <GroupTitle title='الأقسام' />
        {SideBarItemData.map((item, index) => <SideBarItem key={index} path={item.path} active={index === 0} icon={item.icon} title={item.title} />)}
        <div className='line'></div>
        <SideBarItem icon={Logout} title="تسجيل الخروج" />
    </aside>
  );
}



export default SideBar;
