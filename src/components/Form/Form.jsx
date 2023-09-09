import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getStateContacts } from 'redux/selectors';
import { addContactThunk } from 'redux/contactsThunk/contactsThunk';

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
    <form className="row gx-3 gy-2 align-items-center" onSubmit={handleSubmit}>
      <h2>Phonebook</h2>
      <div className="col-sm-3">
        <label className="visually-hidden" htmlFor="specificSizeInputName">
          Name
        </label>
        Name
        <input
          className="form-control"
          id="inputName"
          type="text"
          name="name"
          value={contactInfo.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          required
        />
        <label className="visually-hidden" htmlFor="specificSizeInputName">
          Number
        </label>
        Number
        <input
          className="form-control"
          id="inputNumber"
          type="tel"
          name="number"
          value={contactInfo.number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-auto">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};
