/* eslint-disable eqeqeq */
import { Neighborhood_1_Person, Tree } from "../Assets/Images";

export default function ProjectCard({title, about, admin, numberOfPerson, progressNumber}) {
  return (
    <div className='project-card card p-3'>
      <div className='bg-image rounded-3 p-1 bg-body-secondary'>
        <img src={Tree} alt='Tree' />
      </div>
      <h2 className='fs-5 my-3 fw-bold'>{title}</h2>
      <p>{about}</p>
      <div className='d-flex column-gap-2'>
        <img src={Neighborhood_1_Person} alt='profile' />
        <p className='mb-0'>
          المسئول :<span> {admin}</span>
        </p>
      </div>
      <div>
        {numberOfPerson}
        <i className='ri-group-fill text-body-secondary'></i>
      </div>
      <div className='d-flex align-items-center column-gap-2 mt-3'>
        <div className='my-progress bg-body-secondary rounded-4 '>
          <div style={{width: `${progressNumber}%`}} className='inner-progress'></div>
        </div>
        <span>{progressNumber == 100 ? 'مكتمل' : progressNumber + '%'}</span>
      </div>
    </div>
  );
}
