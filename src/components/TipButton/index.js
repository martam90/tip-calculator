import React from 'react';
import tipButtonAmount from '../../assets/data';

const TipButton = () => {
  return (
    <>
    {tipButtonAmount.map((item) => (
      <button className="button button--tip" type="button" key={item.id}>{item.name}</button>
    ))}
  </>
  );
}

export default TipButton;