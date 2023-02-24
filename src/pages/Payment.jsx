import { useState } from 'react';

import AddCardForm from '../components/AddCardForm.jsx';
import CardPreview from '../components/CardPreview.jsx';
import Header from '../components/Header.jsx'
import '../styles/pages/Payment.css';

function Payment() {

  const [allCards, setAllCards] = useState([JSON.parse(localStorage.getItem('card'))])

  return (
    <>
    <Header/>
    <div className="Payment">
      <AddCardForm allCards={allCards} setAllCards={setAllCards}/>
      <CardPreview allCards={allCards} setAllCards={setAllCards}/>
      {/* <CardPreview cards={cards} /> */}
    </div>
    </>
  );
}

export default Payment;
