// React
import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
// Components
import AdditionalFeature from './AdditionalFeature';
// Types
import { Feature } from '../../../types';
import { State } from '../slices/featureSlice';

const AdditionalFeatures: FC = () => {
  const additionalFeatures = useSelector<State, readonly Feature[]>(state => state.additionalFeatures);

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map(additionalFeature => (
            <AdditionalFeature key={additionalFeature.id} id={additionalFeature.id} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
