import React, { Component } from 'react';

// Promotions =>
//  > Promotion =>
/*
"price": 15.0,
"productName": "Pepperoni Pizza",
"expirationDate": "1975-10-30",
*/
// Props => properties => atributes on your HTML
class Promotion extends Component {
  render() {
    // console.log(this.props);
    return (
      <table className="bordering">
        <thead>
          <tr>
            <th>Price</th>
            <th>Produce Name</th>
            <th>Expiration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.props.price}</td>
            <td>{this.props.productName}</td>
            <td>{this.props.expirationDate}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Promotion;
