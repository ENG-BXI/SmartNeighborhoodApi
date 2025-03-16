import React, {useContext, useEffect, useState} from 'react';
import './AddNewFamily.css';
import HeaderBuilding from '../../../Components/HeaderBuilding';
import FormGroupDashBoard from '../../../Components/FormGroupDashBoard';
import {useNavigate} from 'react-router';
import {storeData} from '../../../Hook/StoreDataContext';
import {ADD_FAMILY, BASEURL, GET_ALL_BLOCK, GET_ALL_FAMILY_CATEGORY, GET_ALL_FAMILY_TYPE} from '../../../Api/EndPoint';

import axios from 'axios';
const AddNewFamily = () => {
  let nav = useNavigate();
  let {data, setData} = useContext(storeData);
  let [loading, setLoading] = useState(false);
  let [submitLoading, setSubmitLoading] = useState(false);
  let [allFamilyCategory, setAllFamilyCategory] = useState([]);
  let [allFamilyType, setAllFamilyType] = useState([]);
  let [allBlock, setAllBlock] = useState([]);
  async function GetAllFamilyCategory() {
    let res = await axios.get(`${BASEURL}/${GET_ALL_FAMILY_CATEGORY}`);
    setAllFamilyCategory(res.data.data);
  }
  async function GetAllFamilyType() {
    let res = await axios.get(`${BASEURL}/${GET_ALL_FAMILY_TYPE}`);
    setAllFamilyType(res.data.data);
  }
  async function GetAllBlock() {
    let res = await axios.get(`${BASEURL}/${GET_ALL_BLOCK}`);
    setAllBlock(res.data.data);
  }
  async function GetAllSelectedData() {
    setLoading(true);
    try {
      await GetAllFamilyCategory();
      await GetAllFamilyType();
      await GetAllBlock();
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }
  function handleSubmit() {
    setSubmitLoading(true)
    axios
      .post(`${BASEURL}/${ADD_FAMILY}`, data)
      .then(data => {
        nav('/');
        setSubmitLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }
  useEffect(() => {
    GetAllSelectedData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <HeaderBuilding title={'اضافة اسرة'} />
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
        className='d-flex w-50 mx-auto flex-column align-items-center text-center row-gap-3 mt-3'
      >
        <div className='w-100'>
          <FormGroupDashBoard data={data} label='اسم الاسرة' setValue={setData} inputType='text' id='name' customClass={['mb-3']} placeHolder={'مثلا : عائلة الاحمدي'} />
          {/* select */}
          <div className='text-end mb-3'>
            <label className='form-label ' htmlFor=''>
              تصيف الاسرة
            </label>
            <select className='form-select' id='familyCategory' value={data.familyCatgoryId ?? 'default'} onChange={e => setData({...data, familyCatgoryId: e.target.value})}>
              <option value='default' disabled>
                حدد تصيف الاسرة
              </option>
              {!loading &&
                allFamilyCategory.length > 0 &&
                allFamilyCategory.map(element => {
                  return <option value={element.id}>{element.name}</option>;
                })}
            </select>
          </div>
          {/* select */}
          <div className='text-end mb-3'>
            <label className='form-label ' htmlFor=''>
              نوع الاسرة
            </label>
            <select className='form-select' id='familyType' value={data.familyTypeId ?? 'default'} onChange={e => setData({...data, familyTypeId: e.target.value})}>
              <option value='default' disabled>
                حدد نوع الاسرة
              </option>
              {!loading &&
                allFamilyType.length > 0 &&
                allFamilyType.map(element => {
                  return <option value={element.id}>{element.name}</option>;
                })}
            </select>
          </div>
          {/* select */}
          <div className='text-end mb-3'>
            <label className='form-label ' htmlFor=''>
              المربع السكني
            </label>
            <select className='form-select' id='block' value={data.blockId ?? 'default'} onChange={e => setData({...data, blockId: e.target.value})}>
              <option value='default' disabled>
                حدد المربع السكني
              </option>
              {!loading &&
                allBlock.length > 0 &&
                allBlock.map(element => {
                  return <option value={element.id}>{element.name}</option>;
                })}
            </select>
          </div>
          <button className='w-100 mb-3 '>اضافة</button>
          {submitLoading && <p>loading ...</p>}

          <button
            onClick={() => {
              nav(-1);
            }}
            className='alt-button w-100 btn'
          >
            الفاء
          </button>
        </div>
      </form>
    </>
  );
};

export default AddNewFamily;
