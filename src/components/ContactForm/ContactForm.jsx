import React, { useState } from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const prop = event.currentTarget.name;
    switch (prop) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'number':
        setNumber(event.currentTarget.value);
        break;
      default:
        throw new Error('Error');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>Name</label>
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          autoComplete="off"
          placeholder="e.g. John Doe"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={css.label}>Number</label>
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          autoComplete="off"
          placeholder="e.g. 560-432-234"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
