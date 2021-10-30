import React from 'react';
import tipButtonAmount from '../../assets/data';

const TipButton = () => {
  return (
    <>
    {tipButtonAmount.map((item) => (
      <div className="button button--tip" key={item.id}>{item.name}</div>
    ))}
  </>
  );
}

export default TipButton;