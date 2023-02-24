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
      {/* <CardPreview cards={cards} /> */}
    </div>
    </>
  );
}

export default Payment;
