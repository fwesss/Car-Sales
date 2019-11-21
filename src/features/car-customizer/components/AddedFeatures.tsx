// React
import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
// Slices
import { State } from '../slices/featureSlice';
// Components
import AddedFeature from './AddedFeature';
// Types
import { Feature } from '../../../types';

const AddedFeatures: FC = () => {
  const features = useSelector<State, readonly Feature[]>(state => state.car.features);

  return (
    <div className="content">
      <h6>Added features:</h6>
      {features.length ? (
        <ol type="1">
          {features.map(feature => (
            <AddedFeature key={feature.id} id={feature.id} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
