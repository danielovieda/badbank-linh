import { useState } from "react";
import Card from '../components/Card'

import { useBankContext } from "../utils/BankContext";

export const CreateAccount = () => {
  const { bank, addUser} = useBankContext();

  const [show, setShow] = useState(true)
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [allValues, setAllValues] = useState({
        username: '',
        email: '',
        password: '',
        balance: 100,
});


  function clearForm() {
    setAllValues('')
    setShow(true)
}

  function validate(field, label) {
    if (!field) {
      setErrorMessage(`Enter field: ${label}`);
      return false;
    }
    if (field === allValues.email) {
      if (allValues.email.includes('@') === true) return true;
      else {
        setErrorMessage("Enter Valid Email");
        return false;
      }
    }
    return true;
  }

  const handleChange = e => {
    setAllValues({...allValues, [e.target.name]: e.target.value})
}

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate(allValues.username, 'username'))     return;
    if (!validate(allValues.email,    'email'))    return;
    if (!validate(allValues.password, 'password')) return;
   
    const user = bank.users.find(user => user.username === allValues.username);
    if (user) {
      setErrorMessage('Username already existed!');
      return;
    }
    const email = bank.users.find(email => email.email === allValues.email);
    if (email) {
      setErrorMessage('Email already registered!');
      return;
    }
    addUser(allValues)
    setSuccessMessage('Successfully Create Account');
    setShow(false);
      }

  return (
    <Card
      bgcolor="primary"
      txtcolor="light"
      header="Create Account"
      body={show ? (
        <>
      <div className="mb-3">
        <label for="exampleInputUsername" className="form-label">Username</label>
        <input 
          type="text" 
          className="form-control" 
          placeholder="abcd"
          id="usernamee"
          name="username"
          onChange={handleChange}></input>
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail" className="form-label">Email</label>
        <input 
          type="text" 
          className="form-control" 
          placeholder="abc@def.com"
          id="email"
          name="email"
          onChange={handleChange}></input>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Password</label>
        <input 
          type="password" 
          className="form-control"
          id="password"
          name="password"
          onChange={handleChange}></input>
      </div>
    <button type="submit" onClick={handleSubmit} className="btn btn-primary">Create Account</button>
    {errorMessage && <div className="mt-2 alert alert-danger" role="alert">{errorMessage}</div>}
    </>
  
    ) : (
      <>
    {successMessage && <div className="mt-2 alert alert-success" role="alert">{successMessage}</div>}
    <button type="submit" onClick={clearForm} className="btn btn-primary">Add Another Account</button>
      </>
    )}
    />  
  )
};