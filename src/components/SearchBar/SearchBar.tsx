import { useEffect, useState } from 'react';
import css from './SearchBar.module.css';

import showToast from '../../utils/toastService';
import { motion } from 'framer-motion';

const SearchBar = ({ onSubmit }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const letters = Array.from('SearchApp');

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const query = form.elements.search.value;

    if (!query.trim()) {
      showToast('info', 'message');

      return;
    }

    onSubmit(query);
    form.reset();
  };

  return (
    <header className={css.header}>
      <div className={css.logoWrapper}>
        {/* animate SVG-logo */}
        <motion.svg
          className={css.logoIcon}
          width={30}
          height={30}
          initial={{ y: -100, x: 215 }}
          animate={{
            y: isVisible && 0,
            x: isVisible && 0,
          }}
          transition={{
            y: { duration: 1, delay: 0.5 },
            x: { duration: 1.6, delay: 1.5 },
          }}
        >
          <use xlinkHref="/sprite.svg#icon-search"></use>
        </motion.svg>

        {/* animate logo-title*/}
        <motion.a
          href="#"
          className={css.logo}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 3, delay: 2 }}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: (letters.length - 1 - index) * 0.35,
                duration: 0.2,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.a>
      </div>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.searchInput}
        />
        <button type="submit" className={css.buttonSearch}>
          <svg className={css.searchIcon} width={16} height={16}>
            <use
              xlinkHref="/sprite.svg#icon-search"
              className={css.svgSearch}
            ></use>
          </svg>
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
