import React from 'react';
import './Charitable.css';
import ProjectCard from '../../../Components/ProjectCard';
const Charitable = () => {
  let DumyData1 = [
    {
      title: 'حديقتنا اجمل',
      about: 'مشروع لزراعة الأشجار والورود في الحي',
      admin: 'احمد سالم',
      numberOfPerson: '20',
      progressNumber: '10'
    },
    {
      title: 'جدارنا فن',
      about: 'مشروع لتزيين الجدران برسومات تعكس هوية الحارة.',
      admin: 'احمد سالم',
      numberOfPerson: '20',
      progressNumber: '30'
    },
    {
      title: 'مكتبة الحارة',
      about: 'إنشاء مكتبة مصغرة يمكن للجميع استعارة الكتب منها.',
      admin: 'فهد عبدالله',
      numberOfPerson: '20',
      progressNumber: '50'
    }
  ];
  let DumyData2 = [
    {
      title: 'إنارة الأمل',
      about: 'مشروع لإنارة الشوارع والأزقة المهملة.',
      admin: 'امين سليمان',
      numberOfPerson: '17',
      progressNumber: '48'
    },
    {
      title: 'ماء للجميع',
      about: 'إنشاء نقاط مياه للشرب في الأماكن العامة.',
      admin: 'قحطان سعد',
      numberOfPerson: '12',
      progressNumber: '100'
    },
    {
      title: 'ملاعب المستقبل',
      about: 'تطوير ملاعب للأطفال والشباب..',
      admin: 'سالم سعيد',
      numberOfPerson: '9',
      progressNumber: '74'
    }
  ];
  return (
    <div className='mb-5'>
      <div className='d-flex my-4 align-items-center justify-content-between'>
        <div className='d-flex align-items-center gap-3 '>
          <h2 className='mb-0'>المشاريع</h2>
          <button className='toggle d-flex align-items-center justify-content-center '>+</button>
        </div>
        <i className='filter ri-filter-fill bg-body-secondary p-1 rounded'></i>
      </div>
      <div>
        <h4 className='mt-5 fs-6'>مشاريع تعاونية</h4>
        <div className='d-flex flex-wrap gap-3'>
          {DumyData1.map((element, index) => (
            <ProjectCard title={element.title} about={element.about} admin={element.admin} numberOfPerson={element.numberOfPerson} progressNumber={element.progressNumber} key={index} />
          ))}
        </div>
        <h4 className='mt-5 fs-6'>مشاريع البنية التحتية</h4>
        <div className='d-flex flex-wrap gap-3'>
          {DumyData2.map((element, index) => (
            <ProjectCard title={element.title} about={element.about} admin={element.admin} numberOfPerson={element.numberOfPerson} progressNumber={element.progressNumber} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Charitable;
