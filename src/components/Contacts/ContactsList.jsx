import { useDispatch, useSelector } from 'react-redux';
import { getStateContacts, getStateFilter } from 'redux/selectors';
import {
  deleteContactThunk,
  getContactsThunk,
} from 'redux/contactsThunk/contactsThunk';
import { useEffect } from 'react';
import styles from './ContactsList.module.css';

export const ContactsList = () => {
  const contacts = useSelector(getStateContacts);
  const filter = useSelector(getStateFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const getFilteredContacts = () => {
    if (!contacts) return [];
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      <h2 className={styles.contacts_list_title}>My contacts</h2>
      <ul className={styles.contacts_list}>
        {filteredContacts.map(contact => (
          <li className={styles.contacts_list_item} key={contact.id}>
            <div className={styles.contacts_list_item_wrapper}>
              <p>{contact.name}:</p>
              <p> {contact.number}</p>
            </div>
            <button
              type="button"
              className={styles.contacts_list_delete_btn}
              onClick={() => dispatch(deleteContactThunk(contact.id))}
            >
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
