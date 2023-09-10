import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getStateContacts } from 'redux/selectors';
import { addContactThunk } from 'redux/contactsThunk/contactsThunk';
import styles from './Form.module.css';

export const Form = () => {
  const [contactInfo, setContactInfo] = useState({ name: '', number: '' });
  const contacts = useSelector(getStateContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    setContactInfo(prevInfo => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isExist = contacts.find(
      el =>
        el.name.toLowerCase() === contactInfo.name.toLowerCase() ||
        el.number === contactInfo.number
    );

    if (isExist) {
      alert('This contact already exists 😮');
      return contacts;
    }

    dispatch(addContactThunk({ ...contactInfo, id: nanoid() }));
    setContactInfo({ name: '', number: '' });
  };

  return (
    <form className={styles.contacts_form} onSubmit={handleSubmit}>
      <h2 className={styles.contacts_form_title}>Phonebook</h2>

      <label
        className={styles.contacts_form_label}
        htmlFor="specificSizeInputName"
      >
        Name
      </label>

      <input
        className={styles.contacts_form_input}
        id="inputName"
        type="text"
        name="name"
        value={contactInfo.name}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
        required
      />
      <label
        className={styles.contacts_form_label}
        htmlFor="specificSizeInputName"
      >
        Number
      </label>

      <input
        className={styles.contacts_form_input}
        id="inputNumber"
        type="tel"
        name="number"
        value={contactInfo.number}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handleChange}
        required
      />

      <div className="col-auto">
        <button type="submit" className={styles.contacts_form_button}>
          Submit
        </button>
      </div>
    </form>
  );
};
