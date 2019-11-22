// React
import React, { FC } from 'react';
// Components
import Header from '../features/car-customizer/components/Header';
import AddedFeatures from '../features/car-customizer/components/AddedFeatures';
import AdditionalFeatures from '../features/car-customizer/components/AdditionalFeatures';
import Total from '../features/car-customizer/components/Total';

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
