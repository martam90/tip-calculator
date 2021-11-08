import React from 'react';
import tipButtonAmount from '../../assets/data';

const BillCalculating = () => {
  return (
    <div className="main__container--mobile main__container-desktop--left">
      <form>
        <label htmlFor="inputBill" className="main__container-text main__container-text--dark">Bill
            <input id="inputBill" name="input-bill" className="input input--bill" type="number"></input>
        </label>
        <p className="main__container-text main__container-text--dark">Select Tip %</p>
        <div className="main__container--buttons">
        {tipButtonAmount.map((item) => (
          <button className="button button--tip" type="button" key={item.id}>{item.name}</button>
        ))}
          <label htmlFor="inputCustom">
            <input id="inputCustom" name="input-custom" className="input input--custom" type="number" placeholder="Custom"></input>
          </label>
        </div>
          <label htmlFor="inputPeople" className="main__container-text main__container-text--dark">Number of People
            <input id="inputPeople" name="input-people" type="number" className="input input--people"></input>
          </label>
      </form>
    </div>
  );
};

export default BillCalculating;

