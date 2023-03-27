import { useState } from "react";
import Card from '../components/Card'

import { useBankContext } from "../utils/BankContext";

export const Login = () => {
  const { bank, setLoggedInUser} = useBankContext();

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    const {name, value} = event.target;
    if (name === 'username') {
      setUsername(value);
    } else {
      setPassword(value);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrorMessage('');
    const user = bank.users.find(user => user.username === username);
    if (!user) {
      setErrorMessage('Could not find user');
      return;
    }
    if (user.password !== password) {
      setErrorMessage('Wrong Password');
      return;
    }
    setLoggedInUser(username);
    setSuccessMessage('Successfully Logged In');
      }

  return (
    <Card
      bgcolor="primary"
      txtcolor="light"
      header="Login"
      body={
        <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label for="exampleInputUsername" className="form-label">Username</label>
        <input 
          type="text" 
          className="form-control" 
          id="exampleInputUsername"
          name="username"
          value={username}
          onChange={handleChange}></input>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Password</label>
        <input 
          type="password" 
          className="form-control" 
          id="exampleInputPassword"
          name="password"
          value={password}
          onChange={handleChange}></input>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
        <label className="form-check-label" for="exampleCheck1">Remember Me</label>
     </div>
    <button type="submit" className="btn btn-primary">Login</button>
    {errorMessage && <div className="mt-2 alert alert-danger" role="alert">{errorMessage}</div>}
    {successMessage && <div className="mt-2 alert alert-success" role="alert">{successMessage}</div>}
    </form>
      }
    />  
  )
};