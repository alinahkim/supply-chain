import React from 'react';
import "./app.scss"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JoinDatabase from './components/joinDatabase/JoinDatabase';
import FormDatabase from './components/formDatabase/FormDatabase';
import Header from './components/header/Header';
import TransactionPage from './components/TransactionPage/TransactionPage';
import TransactionHeader from './components/TransactionPage/TransactionHeader/TransactionHeader';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Header/>} />
        <Route path='/Join' element={<JoinDatabase />} />
        <Route path='/Login' element={<FormDatabase />} />
        <Route path= '/TransactionPage' element={<TransactionPage/>} />
        <Route path='/headertest' element = {<TransactionHeader />} />
        {/* <Route path='/' element={<Home />} /> */}
      </Routes>
    </Router>
  );
}

export default App;