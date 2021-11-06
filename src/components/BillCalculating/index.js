import React from 'react';
import TipButton from '../TipButton';

const BillCalculating = () => {
  return (
    <section>
      <div className="main__container--mobile main__container-desktop--left">
        <div>
          <p className="main__container-text main__container-text--dark">Bill</p>
          <form>
            <label htmlFor="inputBill">
              <input id="inputBill" name="input-bill" className="input input--bill" type="number"></input>
            </label>
          </form>
        </div>
        <div>
          <p className="main__container-text main__container-text--dark">Select Tip %</p>
          <div className="main__container--buttons">
            <TipButton />
            <form>
              <label htmlFor="inputCustom">
                <input id="inputCustom" name="input-custom" className="input input--custom" type="number" placeholder="Custom"></input>
              </label>
            </form>
          </div>
        </div>
        <div>
          <p className="main__container-text main__container-text--dark">Number of People</p>
          <form>
            <label htmlFor="inputPeople">
              <input id="inputPeople" name="input-people" type="number" className="input input--people"></input>
            </label>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BillCalculating;

