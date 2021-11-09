import React from 'react';
import billAmount from '../../assets/text.js';

const DisplayToPay = () => {
  return (
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
        <button className="button button--reset" type="reset">Reset</button>
      </div>
    </div>
  );
};


export default DisplayToPay;