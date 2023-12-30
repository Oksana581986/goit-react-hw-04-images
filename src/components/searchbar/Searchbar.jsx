import React, { useState } from 'react';
import css from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
    const [query, setQuery] = useState('');
   
      const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(query);
    };

      return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={handleSubmit}>
          <button type="submit" className={css.button}>
            <span className={css.btnlabel}>Search</span>
          </button>
  
          <input
            className={css.input}
            type="text"
            name='searchInput'
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={e => setQuery(e.target.value)}
            required
          />
        </form>
      </header>
    );
  };


export { Searchbar };