// React
import React, { FunctionComponent } from 'react';
// Types
import { connect } from 'react-redux';

type TotalProps = {
  readonly additionalPrice: number;
  readonly price: number;
};

const Total: FunctionComponent<TotalProps> = ({ additionalPrice, price }) => (
  <div className="content">
    <h4>Total Amount: ${price + additionalPrice}</h4>
  </div>
);

const mapStateToProps = (state: {
  readonly additionalPrice: number;
  readonly car: { readonly price: number };
}): { readonly additionalPrice: number; readonly price: number } => ({
  additionalPrice: state.additionalPrice,
  price: state.car.price
});

export default connect(mapStateToProps)(Total);
