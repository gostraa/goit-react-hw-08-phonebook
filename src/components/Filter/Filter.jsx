import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice/FilterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div className="col-sm-3">
      <p>Filter your contacts 😄</p>
      <input
        name="filter"
        className="form-control"
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
    </div>
  );
};
