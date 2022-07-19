import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categotries = useSelector((store) => store.categotries);
  const dispatch = useDispatch();
  return (
    <div className="categories">
      <button type="button" className="checkstatus" onClick={() => dispatch(checkStatus())}>check status</button>
      {!Array.isArray(categotries) ? <p className="construct">{categotries}</p> : ''}
    </div>
  );
};

export default Categories;
