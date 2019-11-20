// React
import React, { FunctionComponent } from 'react';
// Components
import AddedFeature from './AddedFeature';
// Types
import { Car } from '../types';

type AddedFeaturesProps = {
  readonly car: Car;
};

const AddedFeatures: FunctionComponent<AddedFeaturesProps> = ({ car: { features } }) => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {features.length ? (
        <ol type="1">
          {features.map(feature => (
            <AddedFeature key={feature.id} feature={feature} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
