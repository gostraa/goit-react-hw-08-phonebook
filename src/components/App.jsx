import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <>
      <Form />
      <p>Filter your contacts 😄</p>
      <Filter />
      <Contacts />
    </>
  );
};
