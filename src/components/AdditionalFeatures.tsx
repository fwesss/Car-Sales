// React
import React, { FunctionComponent } from 'react';
// Redux
import { connect } from 'react-redux';
// Actions
import { addFeature } from '../actions/appActions';
// Components
import AdditionalFeature from './AdditionalFeature';
// Types
import { Feature } from '../types';

type AdditionalFeaturesProps = {
  readonly additionalFeatures: readonly Feature[];
  readonly addFeature: { (feature: Feature): { readonly type: string; readonly payload: Feature } };
};

const AdditionalFeatures: FunctionComponent<AdditionalFeaturesProps> = ({
  additionalFeatures,
  addFeature
}) => {
  const handleAddFeature = (
    feature: Feature
  ): { readonly type: string; readonly payload: Feature } => addFeature(feature);

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map(additionalFeature => (
            <AdditionalFeature
              key={additionalFeature.id}
              feature={additionalFeature}
              handleAddFeature={handleAddFeature}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = (state: {
  readonly additionalFeatures: readonly Feature[];
}): { readonly additionalFeatures: readonly Feature[] } => ({
  additionalFeatures: state.additionalFeatures
});

export default connect(mapStateToProps, { addFeature })(AdditionalFeatures);
