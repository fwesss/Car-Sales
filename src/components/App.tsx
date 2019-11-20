// React
import React, { FC } from 'react';
// Components
import Header from './Header';
import AddedFeatures from './AddedFeatures';
import AdditionalFeatures from './AdditionalFeatures';
import Total from './Total';

const App: FC = () => (
  <div className="boxes">
    <div className="box">
      <Header />
      <AddedFeatures />
    </div>
    <div className="box">
      <AdditionalFeatures />
      <Total />
    </div>
  </div>
);

export default App;
