import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { Container } from './App.styled';
import { Filter } from './Filter/Filter';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        {contacts.length !== 0 && <Filter />}
        <ContactList />
      </Section>
    </Container>
  );
};
