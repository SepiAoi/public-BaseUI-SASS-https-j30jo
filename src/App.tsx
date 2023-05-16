import React, { FunctionComponent } from 'react';
import PropertyBar from './propertybar/PropertyBar';
import './main.css'

const App: FunctionComponent = () => {
  return <div className="background">
    hello there
    <PropertyBar />
  </div>;
};

export default App;
