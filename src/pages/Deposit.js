import { useBankContext } from "../utils/BankContext"
import Card from '../components/Card'
import { useState } from "react";

const ATM = ({ onChange, isValid }) => {
  return (
    <label className="label huge">
    Amount: <br></br>
      <input type="number" onChange={onChange}></input>
      <input type="submit" disabled={!isValid}></input>
    </label>
  );
};

export const Deposit = () => {
  const {bank} = useBankContext();
  const [accountState, setAccountState] = useState(bank.users[0].balance);
  const [deposit, setDeposit] = useState('')
  const [validTransaction, setValidTransaction] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    if (Number(event.target.value) <= 0 ) { 
      alert('Invalid transaction. Positive number only')
      return setValidTransaction(false);
    } else {
      setValidTransaction(true);
    }
    setDeposit(Number(event.target.value));
  };
  

  const handleDeposit = event => {
    let newTotal = accountState + deposit;
    setSuccessMessage(`Successfully deposit ${deposit}`);
    setAccountState(newTotal);
    event.preventDefault();
  };

  return (
    <Card
      bgcolor="primary"
      txtcolor="light"
      header="Deposit"
      body={
      <form onSubmit={handleDeposit}>
        <p>Account Balance {accountState}</p>
        <ATM onChange={handleChange} isValid={validTransaction}/>
        {successMessage && <div className="mt-2 alert alert-success" role="alert">{successMessage}</div>}
      </form>
    }
    />
  );
};

export const Withdraw = () => {
  const {bank} = useBankContext();
  const [accountState, setAccountState] = useState(bank.users[0].balance);
  const [withdraw, setWithdraw] = useState('')
  const [validTransaction, setValidTransaction] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    if (Number(event.target.value) > accountState ) { 
      alert('Insufficient funds')
      return setValidTransaction(false);
    } else {
      setValidTransaction(true);
    }
    setWithdraw(Number(event.target.value));
  };
  

  const handleWithdraw = event => {
    let newTotal = accountState - withdraw;
    setSuccessMessage(`Successfully withdraw ${withdraw}`);
    setAccountState(newTotal);
    event.preventDefault();
  };

  return (
    <Card
      bgcolor="primary"
      txtcolor="light"
      header="Withdraw"
      body={
      <form onSubmit={handleWithdraw}>
      <p>Account Balance {accountState}</p>
      <ATM onChange={handleChange} isValid={validTransaction}/>
      {successMessage && <div className="mt-2 alert alert-success" role="alert">{successMessage}</div>}
    </form>
    }
    />
  );
};