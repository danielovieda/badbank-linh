import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import {CreateAccount} from './pages/CreateAccount';
import {Login} from './pages/Login';
import {Deposit} from './pages/Deposit';
import {Withdraw} from './pages/Deposit';
import {Alldata} from './pages/Alldata';
import Navbar from './components/Navbar';
import { BankProvider } from './utils/BankContext';

function App() {
  return (
    <BrowserRouter>
      <BankProvider>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="home" element={<Home />}/>
            <Route path="createaccount" element={<CreateAccount />}/>
            <Route path="login" element={<Login />}/>
            <Route path="deposit" element={<Deposit />}/>
            <Route path="withdraw" element={<Withdraw />}/>
            <Route path="alldata" element={<Alldata />}/>
          </Routes>
      </BankProvider>
    </BrowserRouter>
  );
}

export default App;
