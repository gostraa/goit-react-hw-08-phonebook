import { ContactsList } from 'components/Contacts/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';

const Contacts = () => {
  return (
    <>
      <Form />
      <Filter />
      <ContactsList />
    </>
  );
};

export default Contacts;
