import React from 'react';
import tipButtonAmount from '../../assets/data';

const BillCalculating = ({
  tip,
  amount,
  people,
  updateTip,
  updateAmount,
  updatePeople,
}) => {
  return (
    <div className="main__container--mobile main__container-desktop--left">
      <form>
        <label
          htmlFor="inputBill"
          className="main__container-text main__container-text--dark"
        >
          Bill
          <input
            id="inputBill"
            name="input-bill"
            type="number"
            min="1"
            value={amount}
            onChange={(e) => updateAmount(e.target.value)}
            className="input input--bill"
          ></input>
        </label>
        <p className="main__container-text main__container-text--dark">
          Select Tip %
        </p>
        <div className="main__container--buttons">
          {tipButtonAmount.map((item) => (
            <button
              className="button button--tip"
              type="button"
              onClick={() => updateTip(item.value)}
              key={item.id}
            >
              {item.name}
            </button>
          ))}
          <label htmlFor="inputCustom">
            <input
              id="inputCustom"
              name="input-custom"
              className="input input--custom"
              type="number"
              value={tip}
              onChange={(e) => updateTip(e.target.value)}
              min="1"
              placeholder="Custom"
            ></input>
          </label>
        </div>
        <label
          htmlFor="inputPeople"
          className="main__container-text main__container-text--dark"
        >
          Number of People
          <input
            id="inputPeople"
            name="input-people"
            type="number"
            value={people}
            onChange={(e) => updatePeople(e.target.value)}
            min="1"
            className="input input--people"
          ></input>
        </label>
      </form>
    </div>
  );
};

export default BillCalculating;
