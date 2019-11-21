// React
import React, { FunctionComponent } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
// Reducers
import { State, removeFeature } from '../slices/featureSlice';
// Types
import { Feature } from '../../../types';

type AddedFeatureProps = {
  readonly id: number;
};

const AddedFeature: FunctionComponent<AddedFeatureProps> = ({ id }) => {
  const feature = useSelector<State, Feature | undefined>(state =>
    state.car.features.find(addedFeature => addedFeature.id === id)
  ) || { id: 0, name: 'additionalFeature', price: 0 };

  const dispatch = useDispatch();

  return (
    <li>
      <button type="button" className="button" onClick={() => dispatch(removeFeature(feature))}>
        X
      </button>
      {feature.name}
    </li>
  );
};

export default AddedFeature;
