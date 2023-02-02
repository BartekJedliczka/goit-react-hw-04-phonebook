import React, { Component } from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { value, onChange, result } = this.props;

    return (
      <div className={css.filter}>
        <label className={css.label}>
          Find contacts by Name
          <input
            className={css.input}
            type="search"
            value={value}
            onChange={onChange}
            placeholder="Enter name"
          />
        </label>
        <p>Number of contacts: {result}</p>
      </div>
    );
  }
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  result: PropTypes.number.isRequired,
};

export default Filter;
