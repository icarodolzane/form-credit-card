import React from 'react';
import logo from '../images/logo.svg';
import PropTypes from 'prop-types';

class Header extends React.Component{
  render() {
    return <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1>
      My Credit Card Form
    </h1>
    <img src={this.props.source} alt="logo-shop" />
  </header>;
  }
}

Header.propTypes = {
  source: PropTypes.string
};
export default Header;


