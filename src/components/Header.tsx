// React
import React, { FunctionComponent } from 'react';
// Types
import { Car } from '../types';

type HeaderProps = {
  readonly car: Car;
};

const Header: FunctionComponent<HeaderProps> = ({ car }) => (
  <header>
    <figure className="image is-128x128">
      <img src={car.image} alt={car.name} />
    </figure>
    <h2>{car.name}</h2>
    <p>Amount: ${car.price}</p>
  </header>
);

export default Header;
