import { Link } from "react-router";

function SideBarItem(props) {
  return (
    <Link to={props.path} className={`side-bar-item fs-2 ${props.active && 'active'}  d-flex align-items-center column-gap-3 px-2 rounded-3 mb-2 text-decoration-none `}>
      <img src={props.icon} alt='SideBarIconItem' />
      <h5 className='mb-0'>{props.title}</h5>
    </Link>
  );
}

export default SideBarItem;