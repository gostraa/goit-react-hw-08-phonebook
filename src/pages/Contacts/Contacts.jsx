import { ContactsList } from 'components/Contacts/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
import styles from '../../components/Form/Form.module.css';

const Contacts = () => {
  return (
    <section className={styles.section_contacts_form}>
      <Form />
      <Filter />
      <ContactsList />
    </section>
  );
};

export default Contacts;
