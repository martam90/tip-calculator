import React from 'react';
import TipButton from '../TipButton';
import ResetButton from '../ResetButton';
import InputBill from '../InputBill';
import InputPeople from '../InputPeople';
import InputCustom from '../InputCustom';
import billAmount from '../../assets/text.js';

const Main = () => {
  return (
    <main>
      <div className="main__container--mobile main__container-desktop--left">
        <div>
          <p className="main__container-text main__container-text--dark">Bill</p>
          <InputBill />
        </div>
        <div>
          <p className="main__container-text main__container-text--dark">Select Tip %</p>
          <div className="main__container--buttons">
            <TipButton />
            <InputCustom />
          </div>
        </div>
        <div>
          <p className="main__container-text main__container-text--dark">Number of People</p>
          <InputPeople />
        </div>
      </div>

        <div className="main__container--mobile main__container-desktop--right">
          <div className="main__container--mobile-bottom">
          {billAmount.map((text) => (
            <div className="main__container--amount-wrapper" key={text.id}>
            <div>
              <p className="main__container-text main__container-text--light">{text.paragraph}
              <br></br>
              <span className="main__container-text--dark-small">{text.span}</span></p>
            </div>
            <div className="main__container-text-bill">$0.00</div>
          </div>
          ))}
          <ResetButton />
          </div>
        </div>
    </main>
  );
}

export default Main;