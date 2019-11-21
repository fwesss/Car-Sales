// React
import React, { FunctionComponent } from 'react';
// Redux
import { connect } from 'react-redux';
// Slices
import { removeFeature } from '../slices/featureSlice';
// Components
import AddedFeature from './AddedFeature';
// Types
import { Feature } from '../../../types';

type AddedFeaturesProps = {
  readonly features: readonly Feature[];
  readonly removeFeature: {
    (feature: Feature): { readonly type: string; readonly payload: Feature };
  };
};

const AddedFeatures: FunctionComponent<AddedFeaturesProps> = ({ features, removeFeature }) => {
  const handleRemoveFeature = (
    feature: Feature
  ): { readonly type: string; readonly payload: Feature } => removeFeature(feature);

  return (
    <div className="content">
      <h6>Added features:</h6>
      {features.length ? (
        <ol type="1">
          {features.map(feature => (
            <AddedFeature
              key={feature.id}
              id={feature.id}
              handleRemoveFeature={handleRemoveFeature}
            />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state: {
  readonly car: {
    readonly features: readonly Feature[];
  };
}): { readonly features: readonly Feature[] } => ({
  features: state.car.features
});

export default connect(mapStateToProps, { removeFeature })(AddedFeatures);
