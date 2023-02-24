// import React, { useState, useEffect } from 'react';
import AddCardForm from '../components/AddCardForm.jsx';
import CardPreview from '../components/CardPreview.jsx';
import Header from '../components/Header.jsx'
import '../styles/pages/Payment.css';

function Payment() {
  return (
    <>
    <Header/>
    <div className="Payment">
      <AddCardForm />
      <CardPreview />
    </div>
    </>
  );
}

export default Payment;
