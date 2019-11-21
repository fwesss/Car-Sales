// React
import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
// Types
import { Car } from '../../../types';
import { State } from '../slices/featureSlice';

const Header: FC = () => {
  const car = useSelector<State, Car>(state => state.car);

  return (
    <header>
      <figure className="image is-128x128">
        <img src={car.image} alt={car.name} />
      </figure>
      <h2>{car.name}</h2>
      <p>Amount: ${car.price}</p>
    </header>
  );
};

export default Header;
