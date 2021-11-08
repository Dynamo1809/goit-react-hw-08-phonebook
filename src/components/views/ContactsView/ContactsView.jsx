import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import Contacts from 'components/Contacts';

const ContactsView = () => {
  return (
    <>
      <h1 className="Phonebook-title">Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </>
  );
};

export default ContactsView;
