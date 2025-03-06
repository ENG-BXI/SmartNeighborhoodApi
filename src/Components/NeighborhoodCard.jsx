import { PersonIcon } from "../Assets/Images";

function NeighborhoodCard(props) {
  return (
    <div className='neighborhood-card p-2 rounded-4 shadow'>
      <img src={props.Image} alt='NeighborhoodImage' />
      <div className='px-1'>
        <h5 className='fw-bold my-3'>{props.Neighborhood}</h5>

        <div className='d-flex column-gap-2 align-items-center '>
          <img src={props.NeighborhoodPersonProfile} alt='NeighborhoodPerson' />
          <p className='mb-1'>{props.PersonName}</p>
        </div>

        <div className='d-flex align-items-center column-gap-2'>
          <img src={PersonIcon} width={'18px'} alt='PersonIcon' />
          <p className='mb-0 text-body-tertiary'>{props.NumberOfFamily}اسرة</p>
        </div>
      </div>
    </div>
  );
}

export default NeighborhoodCard;