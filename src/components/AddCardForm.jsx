import React, { useState } from 'react';
import InputMask from "react-input-mask";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/es/styles-compiled.css";
import "../styles/components/AddCardForm.css";
import { Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux'
import saveCard from '../redux/actions';

function AddCardForm() {
  const [card, setState] = useState({
    number: "",
    expiry: "",
    cardType: "",
    cvc: "",
    name: "",
    focus: "",
  });
  const dispatch = useDispatch();

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };


  const placeholders = {
    name: 'SEU NOME AQUI',
    expiry: 'validade'
  }

  // const saveCardInStorage = () => {
  //   const cardToSave = {
  //     number: card.number,
  //     name: card.name,
  //     cardType: card.cardType,
  //   };

  //   if(!localStorage.getItem('card')){
  //     localStorage.setItem('card', JSON.stringify([cardToSave]));
  //   }
  //   else {
  //     localStorage.setItem(
  //       'card',
  //       JSON.stringify([...JSON.parse(localStorage.getItem('card')), 
  //       cardToSave
  //       ])
  //     );
  //   }    

  // }
  

  const buttonHandler = () => {
    const cardToSave = {
      number: card.number,
      cardType: card.cardType,
      name: card.name,
    }
    dispatch(saveCard(cardToSave));
    setState({
      number: "",
      expiry: "",
      cardType: "",
      cvc: "",
      name: "",
      focus: "",
    });
    
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Cartão salvo!',
      showConfirmButton: false,
      timer: 1500
    })
  };

  return (
    <section className="main-container">
      <div className="form-frame">
        <h4>Adicionar um cartão de crédito</h4>
        <div className="card-inputs">
          <label htmlFor="number">
            Número do cartão
            <InputMask
              name='number'
              mask='9999 9999 9999 9999' 
              value={card.number}
              id="number"
              placeholder="Número do cartão"
              onChange={ handleInputChange }
              onFocus={ handleInputFocus }
              className="card-input"
            />
          </label>
          <label htmlFor="card-name">
            Nome no cartão
            <input
              autoComplete="off"
              type="text"
              name="name"
              id="name" 
              placeholder="Nome no cartão"
              value={card.name}
              onChange={ handleInputChange }
              onFocus={ handleInputFocus }
              className="card-input"
            />
          </label>
          <label htmlFor="expiry">
            Data de expiração
          <InputMask
            id='expiry'
            name='expiry'
            mask='99/99'
            placeholder='MM/YY'
            value={card.expiry}
            onChange={handleInputChange}
            onFocus={ handleInputFocus }
            className="card-input"
          />
          </label>
          <label className="card-cvc" htmlFor="cvc">
            <span>Código de segurança (CVV)</span>
             <InputMask 
              mask='999' 
              name="cvc"
              id="cvc"
              placeholder="CVC"
              value={card.cvc}
              onChange={ handleInputChange }
              onFocus={ handleInputFocus }
              className="card-cvc"
              />
          </label>
          <div>
            <Form.Select
              name='cardType'
              value={card.cardType}
              aria-label="Bandeira cartão"
              onChange={handleInputChange}
              onFocus={ handleInputFocus }
            >
              <option>Bandeira cartão</option>
              <option value="Visa">Visa</option>
              <option value="Mastercard">Mastercard</option>
              <option value="Dinners">Dinners</option>
              <option value="HiperCard">HiperCard</option>
              <option value="AmericanExpress">AmericanExpress</option>
            </Form.Select>
          </div>
          {/* <label htmlFor="cardType">
            Bandeira
            <input
              autoComplete="off"
              type="text"
              name="cardType"
              id="cardType"
              placeholder="Bandeira do cartão"
              value={card.cardType}
              onChange={ handleInputChange }
              onFocus={ handleInputFocus }
              className="card-input"
            />
          </label> */}
        </div>
      </div>
      <div id="AddCardForm" className="card-preview">
      <Cards
        number={card.number}
        expiry={card.expiry}
        cvc={card.cvc}
        name={card.name}
        focused={card.focus}
        placeholders={placeholders}
      />
      <Button
        variant="success"
        onClick={buttonHandler}
      >
        Adicionar Cartão
      </Button>
      </div>
    </section>
  );
}

export default connect()(AddCardForm);
