// React
import React, { FunctionComponent } from 'react';
// Redux
import { connect } from 'react-redux';
// Types
import { Feature } from '../../../types';

type AdditionalFeatureProps = {
  readonly feature: Feature | undefined;
  readonly handleAddFeature: { (feature: Feature): void };
};

const AdditionalFeature: FunctionComponent<AdditionalFeatureProps> = ({
  feature = { id: 0, name: 'feature', price: 0 },
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

const mapStateToProps = (
  state: { readonly additionalFeatures: readonly Feature[] },
  { id }: { readonly id: number }
): { readonly feature: Feature | undefined } => ({
  feature: state.additionalFeatures.find(feature => feature.id === id)
});

export default connect(mapStateToProps)(AdditionalFeature);
