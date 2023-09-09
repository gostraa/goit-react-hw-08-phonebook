import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice/FilterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div className="col-sm-3">
      <input
        name="filter"
        className="form-control"
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
    </div>
  );
};
