import React, { Suspense } from 'react';
import './App.css';
import Header from './common/Header';
import Footer from './common/Footer';
import NotFound from './common/NotFound';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './flux/store';

const Product = React.lazy(() => import('./features/product'))

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        
        <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter >
            <Header />
            
            <Switch>
              <Route path="/product" component={Product} />
              <Route component={NotFound} />
            </Switch>

            {/* <Footer /> */}
          </BrowserRouter >
        </Suspense>
        
      </div>
    </Provider>
  );
}

export default App;
