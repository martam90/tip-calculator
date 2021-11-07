import React from 'react';
import TipButton from '../TipButton';

const BillCalculating = () => {
  return (
    <section>
      <div className="main__container--mobile main__container-desktop--left">
        <form>
          <label htmlFor="inputBill" className="main__container-text main__container-text--dark">Bill
              <input id="inputBill" name="input-bill" className="input input--bill" type="number"></input>
          </label>
          <p className="main__container-text main__container-text--dark">Select Tip %</p>
          <div className="main__container--buttons">
            <TipButton />
            <label htmlFor="inputCustom">
              <input id="inputCustom" name="input-custom" className="input input--custom" type="number" placeholder="Custom"></input>
            </label>
          </div>
            <label htmlFor="inputPeople" className="main__container-text main__container-text--dark">Number of People
              <input id="inputPeople" name="input-people" type="number" className="input input--people"></input>
            </label>
        </form>
      </div>
    </section>
  );
};

export default BillCalculating;

