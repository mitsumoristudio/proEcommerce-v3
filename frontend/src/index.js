import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HelmetProvider} from "react-helmet-async";
import store from './store';
import {Provider} from 'react-redux';
import {PayPalScriptProvider} from "@paypal/react-paypal-js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <HelmetProvider>
          <Provider store={store}>
              <PayPalScriptProvider deferLoading={true} >
                  <App />
              </PayPalScriptProvider>a

          </Provider>
      </HelmetProvider>
  </React.StrictMode>
);


