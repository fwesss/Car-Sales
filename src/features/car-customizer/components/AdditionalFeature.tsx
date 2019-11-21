// React
import React, { FunctionComponent } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
// Reducers
import { State, addFeature } from '../slices/featureSlice';
// Types
import { Feature } from '../../../types';

type AdditionalFeatureProps = {
  readonly id: number;
};

const AdditionalFeature: FunctionComponent<AdditionalFeatureProps> = ({ id }) => {
  const feature = useSelector<State, Feature | undefined>(state =>
    state.additionalFeatures.find(additionalFeature => additionalFeature.id === id)
  ) || { id: 0, name: 'additionalFeature', price: 0 };

  const dispatch = useDispatch();

  return (
    <li>
      <button type="button" className="button" onClick={() => dispatch(addFeature(feature))}>
        Add
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default AdditionalFeature;
