import React, { useEffect, useState } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const contactAdded = ({ name, number }) => {
    const normalizedCase = name.toLowerCase();

    let isAdded = false;

    contacts.forEach(el => {
      if (el.name.toLowerCase() === normalizedCase) {
        alert(`${name} is already in contacts`);
        isAdded = true;
      }
    });

    if (isAdded) {
      return;
    }
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    setContacts(prevContacts => [...prevContacts, contact]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filteredContacts = () => {
    const normalizedCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedCase)
    );
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={contactAdded} />
      <h2>Contact</h2>

      <div>
        <Filter
          value={filter}
          onChange={changeFilter}
          result={filteredContacts().length}
        />
        <ContactList
          contacts={filteredContacts()}
          deleteContact={deleteContact}
        />
      </div>
    </div>
  );
};

export default App;
