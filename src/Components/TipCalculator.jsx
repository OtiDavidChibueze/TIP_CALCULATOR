import { useState } from "react";

const TipCalculator = () => {
  const [bill, setBill] = useState(0);

  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const averagePercentage = bill * ((percentage1 + percentage2) / 2 / 100);

  const handleReset = () => {
    setBill(0);
    setPercentage1(0);
    setPercentage2(0);
  };

  return (
    <div>
      <BillInput bill={bill} onBill={setBill} />

      <ServicePercentage
        percentage={percentage1}
        onSetPercentage={setPercentage1}
      >
        How did you like the service?
      </ServicePercentage>
      <ServicePercentage
        percentage={percentage2}
        onSetPercentage={setPercentage2}
      >
        How did your friend like the service?
      </ServicePercentage>

      <Output bill={bill} averagePercentage={averagePercentage} />

      {bill > 0 && <Reset onHandleReset={handleReset} />}
    </div>
  );
};
const BillInput = ({ bill, onBill }) => {
  return (
    <form>
      <label htmlFor="">How much was the bill?</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => onBill(Number(e.target.value))}
      />
    </form>
  );
};
const ServicePercentage = ({ children, percentage, onSetPercentage }) => {
  return (
    <form>
      <label htmlFor="">{children}</label>
      <select
        name=""
        id=""
        value={percentage}
        onChange={(e) => onSetPercentage(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied(0%) </option>
        <option value={5}>It was okay(5%)</option>
        <option value={10}>It was good(10%)</option>
        <option value={20}> Absolutely amazing(20%)</option>
      </select>
    </form>
  );
};
const Output = ({ bill, averagePercentage }) => {
  const totalCost = bill + averagePercentage;

  return (
    <div>
      <strong>
        you pay ${totalCost} (${bill} + ${averagePercentage})
      </strong>
    </div>
  );
};
const Reset = ({ onHandleReset }) => {
  return (
    <div>
      <button onClick={onHandleReset}>Reset</button>
    </div>
  );
};

export default TipCalculator;
