import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { Container } from './App.styled';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const data = JSON.parse(localStorage.getItem('list-contacts'));
    if (data) {
      return [...data];
    } else {
      return [
        { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
        { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
        { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
        { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
      ];
    }
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('list-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const isNameHas = name => {
    return contacts.some(contact => contact.name === name);
  };

  const onSubmit = data => {
    data.id = nanoid();
    setContacts(prev => {
      return [...prev, { ...data }];
    });
  };

  const onDelete = id => {
    const data = contacts.filter(contact => contact.id !== id);
    setContacts([...data]);
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm onSubmit={onSubmit} isNameHas={isNameHas} />
      </Section>

      <Section title="Contacts">
        {contacts.length !== 0 && (
          <Filter filter={filter} onChange={setFilter} />
        )}
        <ContactList contacts={filterContacts()} onDelete={onDelete} />
      </Section>
    </Container>
  );
};
