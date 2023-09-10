import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice/FilterSlice';
import styles from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.contacts_form_filter_wrapper}>
      <p className={styles.contacts_form_filter_title}>
        Filter your contacts 😄
      </p>
      <input
        name="filter"
        className={styles.contacts_form_filter_input}
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
    </div>
  );
};
