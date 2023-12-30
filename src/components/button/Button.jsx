import React from 'react';
import css from './Button.module.css';

const Button = ({ onClick, isHidden}) => {
  return isHidden ? null : (
    <div className={css.buttonCont}><button type="button" className={css.buttonLoad} onClick={onClick}>
    Load more
  </button> </div>
   );
};

  export { Button };