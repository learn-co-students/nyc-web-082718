import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Promotions from './Promotions';

const promotions = [
  {
    "id": 1,
    "price": 10.0,
    "productName": "Plain Pizza",
    "expirationDate": "2018-10-30",
  },
  {
    "id": 2,
    "price": 15.0,
    "productName": "Pepperoni Pizza",
    "expirationDate": "1975-10-30",
  },
  {
    "id": 3,
    "price": 20.0,
    "productName": "Stuffed Crust Garlic Pineapple Pizza",
    "expirationDate": "2018-12-25",
  },
  {
    "id": 4,
    "price": 0.0,
    "productName": "Poptart Flavored Donuts",
    "expirationDate": "infinity",
  },
];

// JSX => React.createElement() => { { } }
class App extends Component {
  // renderPromotions() {
  //   return promotions.map(promotion => {
  //       return (
  //         <Promotion
  //           price={promotion.price}
  //           productName={promotion.productName}
  //           expirationDate={promotion.expirationDate}
  //         />
  //       )
  //   })
  // }

  render() {
    return (
      <>
        <Promotions promotions={promotions} />
        <hr/>
        <Promotions promotions={promotions} />
        <hr/>
        <Promotions promotions={promotions} />
      </>
    );
  }
}

export default App;
