import React from 'react';
import { Router } from '@reach/router';
import Preparation from './components/Preparation';

import './App.css';

const App = () => {

  return (
    <div>
      <Router>
        <Preparation path="/prepareDocument" />
      </Router>
    </div>
  )
};

export default App;
