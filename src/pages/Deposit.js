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
  const {bank, setBank} = useBankContext();
  const [accountState, setAccountState] = useState(bank.users[0].balance);
  const [deposit, setDeposit] = useState('')
  const [validTransaction, setValidTransaction] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    const deposit = Number(event.target.value);
    if (deposit <= 0 ) { 
      alert('Invalid transaction. Positive number only')
      return setValidTransaction(false);
    } else {
      setValidTransaction(true);
    }
    setDeposit(deposit);
    setBank({
      ...bank,
      users: [
        {
          ...bank.users[0], //returns the first user
          balance: accountState + deposit //updateds balance from the current state + deposit amount
        },
        ...bank.users.slice(1) //returns any other users, except the first one
      ]
    })
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

