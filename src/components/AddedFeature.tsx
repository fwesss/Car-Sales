// React
import React, { FunctionComponent } from 'react';
// Types
import { Feature } from '../types';

type AddedFeatureProps = {
  readonly feature: Feature;
};

const AddedFeature: FunctionComponent<AddedFeatureProps> = ({ feature: { name } }) => (
  <li>
    {/* Add an onClick to run a function to remove a feature */}
    <button type="button" className="button">
      X
    </button>
    {name}
  </li>
);

export default AddedFeature;
