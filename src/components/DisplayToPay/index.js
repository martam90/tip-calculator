import React from 'react';

const DisplayToPay = ({ tip, amount, people, onReset }) => {
  const tipAmount = (amount * tip) / (100 * people);
  const total = amount / people + tipAmount;

  return (
    <div className="main__container--mobile main__container-desktop--right">
      <div className="main__container--mobile-bottom">
        <div className="main__container--amount-wrapper-desktop">
          <div className="main__container--amount-wrapper main__container--amount-wrapper-tip-amount">
            <div>
              <p className="main__container-text main__container-text--light">
                Tip Amount
                <br></br>
                <span className="main__container-text--dark-small">
                  / person
                </span>
              </p>
            </div>
            <div className="main__container-text-bill main__container-text-bill-tip-amount">
              ${tipAmount.toFixed(2)}
            </div>
          </div>
          <div className="main__container--amount-wrapper main__container--amount-wrapper-total">
            <div>
              <p className="main__container-text main__container-text--light">
                Total
                <br></br>
                <span className="main__container-text--dark-small">
                  / person
                </span>
              </p>
            </div>
            <div className="main__container-text-bill main__container-text-bill-total">
              ${total.toFixed(2)}
            </div>
          </div>
        </div>
        <button className="button button--reset" type="reset" onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default DisplayToPay;
