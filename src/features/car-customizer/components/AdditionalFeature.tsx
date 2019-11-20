// React
import React, { FunctionComponent } from 'react';
// Types
import { Feature } from '../../../types';

type AdditionalFeatureProps = {
  readonly feature: Feature;
  readonly handleAddFeature: { (feature: Feature): void };
};

const AdditionalFeature: FunctionComponent<AdditionalFeatureProps> = ({
  feature,
  handleAddFeature
}) => (
  <li>
    {/* Add an onClick that will let you add a feature to your car */}
    <button type="button" className="button" onClick={() => handleAddFeature(feature)}>
      Add
    </button>
    {feature.name} (+{feature.price})
  </li>
);

export default AdditionalFeature;
