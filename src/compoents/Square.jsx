import React from 'react';

const Square = (props) => {
  const { onClick, value } = props;
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
