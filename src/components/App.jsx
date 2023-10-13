import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getIsLoading } from 'redux/selectors';

import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { Container } from './App.styled';
import { Filter } from './Filter/Filter';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        {isLoading && <Loader />}
        {!isLoading && contacts.length > 0 && <Filter />}
        {!isLoading && contacts.length > 0 && <ContactList />}
      </Section>
    </Container>
  );
};
