import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Provider from 'react-redux/es/components/Provider';
import mainStore from './store/mainStore/mainStore';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
          <Provider   store={mainStore}>


            <App/>
          </Provider>
      
  
    
  
);

