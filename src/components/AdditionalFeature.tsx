// React
import React, { FunctionComponent } from 'react';
// Types
import { Feature } from '../types';

type AdditionalFeatureProps = {
  readonly feature: Feature;
};

const AdditionalFeature: FunctionComponent<AdditionalFeatureProps> = ({
  feature: { name, price }
}) => (
  <li>
    {/* Add an onClick that will let you add a feature to your car */}
    <button type="button" className="button">
      Add
    </button>
    {name} (+{price})
  </li>
);

export default AdditionalFeature;
