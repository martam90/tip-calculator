import React, { useState } from 'react';
import DisplayToPay from '../DisplayToPay';
import BillCalculating from '../BillCalculating';

const Main = () => {
  const [amount, setAmount] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(1);

  const handleReset = () => {
    setAmount(0);
    setTip(0);
    setPeople(1);
  };

  return (
    <main className="container">
      <BillCalculating
        tip={tip}
        amount={amount}
        people={people}
        updateAmount={setAmount}
        updateTip={setTip}
        updatePeople={setPeople}
      />
      <DisplayToPay
        tip={tip}
        amount={amount}
        people={people}
        onReset={handleReset}
      />
    </main>
  );
};

export default Main;
