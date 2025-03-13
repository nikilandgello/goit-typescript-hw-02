import { useState } from 'react';
import css from './ScrollUpButton.module.css';

const ScrollUpButton = () => {
  const [isAtTop, setIsAtTop] = useState<boolean>(true);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setIsAtTop(false);
  };

  const scrollToBottom = (): void => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
    setIsAtTop(true);
  };

  return (
    <button
      onClick={isAtTop ? scrollToTop : scrollToBottom}
      className={css.scrollBtn}
    >
      {isAtTop ? (
        <svg className={css.arrowIcon} width={20} height={25}>
          <use xlinkHref="/sprite.svg#icon-arrowup"></use>
        </svg>
      ) : (
        <svg className={css.arrowIcon} width={20} height={25}>
          <use xlinkHref="/sprite.svg#icon-arrowdown"></use>
        </svg>
      )}
    </button>
  );
};

export default ScrollUpButton;
