/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Header from './components/Header';
import CartContainer from './Containers/CartContainer';
import Footer from './components/Footer';
import ProductsContainer from './Containers/ProductsContainer';
import MessageContainer from './Containers/MessageContainer';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id="mainContainer">
          <div className="container">
            <ProductsContainer />
            <MessageContainer />
            <CartContainer />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;
