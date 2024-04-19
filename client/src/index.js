import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './Shared.scss';
import App from './App';
import UserStore from './store/UserStore';
import ExpertStrore from './store/ExpertStrore';
import MeatingStore from './store/MeatingStore';
import CityStore from './store/CityStore';
import ExpertStatements from './store/ExpertStatements';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    expert: new ExpertStrore(),
    meatings: new MeatingStore(),
    cities: new CityStore(),
    expertStatements: new ExpertStatements()
  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);
