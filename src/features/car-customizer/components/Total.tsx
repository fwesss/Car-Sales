// React
import React, { FC } from 'react';
// Types
import { useSelector } from 'react-redux';
import { State } from '../slices/featureSlice';

const Total: FC = () => {
  const { price, additionalPrice } = useSelector<State, { readonly price: number; readonly additionalPrice: number }>(
    state => ({
      price: state.car.price,
      additionalPrice: state.additionalPrice
    })
  );

  return (
    <div className="content">
      <h4>Total Amount: ${price + additionalPrice}</h4>
    </div>
  );
};

export default Total;
