import React from 'react';
import DisplayToPay from '../DisplayToPay';
import BillCalculating from '../BillCalculating';

const Main = () => {
  return (
    <main>
      <BillCalculating />
      <DisplayToPay />
    </main>
  );
}

export default Main;