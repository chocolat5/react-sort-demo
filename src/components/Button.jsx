import React from 'react';

const Button = ({ button, handleSort, sort }) => {
  return (
     <button
       onClick={() => handleSort(button)}
       className={sort.key === button ? sort.order === 1 ? 'active asc' : 'active desc' : ''}>
       {button.toUpperCase()}
     </button>
  )

}

export default Button;
