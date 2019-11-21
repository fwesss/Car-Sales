// React
import React, { FunctionComponent } from 'react';
// Redux
import { connect } from 'react-redux';
// Types
import { Feature } from '../../../types';

type AddedFeatureProps = {
  readonly feature: Feature | undefined;
  readonly handleRemoveFeature: { (feature: Feature): void };
};

const AddedFeature: FunctionComponent<AddedFeatureProps> = ({
  feature = { id: 0, name: 'feature', price: 0 },
  handleRemoveFeature
}) => (
  <li>
    <button type="button" className="button" onClick={() => handleRemoveFeature(feature)}>
      X
    </button>
    {feature.name}
  </li>
);

const mapStateToProps = (
  state: { readonly car: { readonly features: readonly Feature[] } },
  { id }: { readonly id: number }
): { readonly feature: Feature | undefined } => ({
  feature: state.car.features.find(feature => feature.id === id)
});

export default connect(mapStateToProps)(AddedFeature);
