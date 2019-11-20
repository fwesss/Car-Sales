// React
import React, { FunctionComponent } from 'react';
// Types
import { Feature } from '../types';

type AddedFeatureProps = {
  readonly feature: Feature;
  readonly handleRemoveFeature: { (feature: Feature): void };
};

const AddedFeature: FunctionComponent<AddedFeatureProps> = ({ feature, handleRemoveFeature }) => (
  <li>
    {/* Add an onClick to run a function to remove a feature */}
    <button type="button" className="button" onClick={() => handleRemoveFeature(feature)}>
      X
    </button>
    {feature.name}
  </li>
);

export default AddedFeature;
