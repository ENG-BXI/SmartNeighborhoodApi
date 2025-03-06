function SideBarItem(props) {
  return (
    <div className={`side-bar-item fs-2 ${props.active && 'active'}  d-flex align-items-center column-gap-2 px-2 rounded-3 mb-2 `}>
      <img src={props.icon} alt='SideBarIconItem' />
      <h5 className='mb-0'>{props.title}</h5>
    </div>
  );
}

export default SideBarItem;