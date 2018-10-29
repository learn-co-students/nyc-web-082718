import React, { Component } from 'react';
import Promotion from './Promotion';
import uuid from 'uuid';

class Promotions extends Component {
  render() {
    // console.log(uuid());
    return (
      <div className="promotion-container">
        {this.props.promotions.map(promotion => {
          return (
            <Promotion
              key={uuid()}
              price={promotion.price}
              productName={promotion.productName}
              expirationDate={promotion.expirationDate}
            />
          )
        })}
      </div>
    )

  }
}

export default Promotions;
