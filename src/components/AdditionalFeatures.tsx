import React, { FunctionComponent } from 'react';
import AdditionalFeature from './AdditionalFeature';
import { Feature } from '../types';

type AdditionalFeaturesProps = {
  readonly additionalFeatures: readonly Feature[];
};

const AdditionalFeatures: FunctionComponent<AdditionalFeaturesProps> = ({ additionalFeatures }) => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map(additionalFeature => (
            <AdditionalFeature key={additionalFeature.id} feature={additionalFeature} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
