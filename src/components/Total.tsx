// React
import React, { FunctionComponent } from 'react';
// Types
import { Car } from '../types';

type TotalProps = {
  readonly additionalPrice: number;
  readonly car: Car;
};

const Total: FunctionComponent<TotalProps> = ({ additionalPrice, car: { price } }) => {
  return (
    <div className="content">
      <h4>Total Amount: ${price + additionalPrice}</h4>
    </div>
  );
};

export default Total;
