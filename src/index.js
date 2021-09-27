import React,{Fragment,Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {routes} from './router/app';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'

import { Provider } from 'react-redux';
import configureStore from './redux/store';

import './assets/css/Product.css'
import '../node_modules/hover.css/css/hover-min.css';
import '../node_modules/rc-slider/assets/index.css';
 
const store = configureStore()



ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode >
 <Suspense fallback={null}>
<BrowserRouter basename={`/`}>
        <Switch>
          <Fragment>
          <App>
             <Route exact path="/" render={() => {
                  return (<Redirect to={`${process.env.PUBLIC_URL}`} />)
              }} />
            
                {routes.map(({ path, Component }) => (
                    <Route key={path} exact path={path}>
                      {({ match }) => (
                          
                            <div><Component/></div>
                          
                      )}
                    </Route>
                  ))}
             
          </App>
          </Fragment> 
        </Switch>
      </BrowserRouter>
    


      </Suspense>
   
  </React.StrictMode>
  </Provider>,
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
