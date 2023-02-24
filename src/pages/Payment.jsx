import { useState } from 'react';
import AddCardForm from '../components/AddCardForm.jsx';
import CardsList from '../components/CardsList.jsx';
import Header from '../components/Header.jsx'
import '../styles/pages/Payment.css';

function Payment() {

  const checkLocalStorage = () => {
    const cardsInLocalStorage = JSON.parse(localStorage.getItem('card'));
    if(!cardsInLocalStorage){
      localStorage.setItem('card', JSON.stringify([]));
    }    
  };
  checkLocalStorage();
  const [allCards, setAllCards] = useState(JSON.parse(localStorage.getItem('card')))

  return (
    <>
    <Header/>
    <div className="Payment">
      <AddCardForm allCards={allCards} setAllCards={setAllCards}/>
      <CardsList allCards={allCards} setAllCards={setAllCards}/>
      {/* <CardPreview cards={cards} /> */}
    </div>
    </>
  );
}

export default Payment;
