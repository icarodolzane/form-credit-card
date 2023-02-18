import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import logo from '../images/logo.png'
import '../styles/components/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Header() {
  return (
    <header className="store-header">
      <div className="logo-store">
        <img src={ logo } alt="my-online-store-logo" />
      </div>
      <div className="search-bar">
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Pesquisar produto"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Pesquisar
        </Button>
      </InputGroup>
      </div>
      <div className="user-info">
        <p>Olá, usuário ...</p>
      </div>
      <div className="shopcart-button">
      <button
          type="button"
          aria-label="shopping-cart"
          className="icon-shopping-cart"
        />
      </div>
    </header>
  )
}
