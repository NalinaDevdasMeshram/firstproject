import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import App from './App';
// import reportWebVitals from './reportWebVitals';
// import ComponentOne from './ComponentOne';
// import Statement from './Statement';
// import UseEffect from './UseEffect';
// import UseEffectApi from './UseEffectApi';
// import TodoApp from './TodoApp';
// import Home from './RoutingConcept/Home';
import { BrowserRouter } from 'react-router-dom';
// import HomePage from './RoutingConcept/ScrollTop/HomePage';
import { Provider } from 'react-redux';
import { store } from './ReduxConcept';
import Counter from './componentOne/Counter';
// import Counter from './Counter';
// import LifeCycle from './LifeCycle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    {/* <ComponentOne/> */}
    {/* <Counter/> */}
    {/* <LifeCycle/> */}
    {/* <Statement/> */}
    {/* <UseEffect/> */}
    {/* <UseEffectApi/> */}
    {/* <TodoApp/> */}
      {/* <HomePage/> */}
      <App/>
      </Provider>
    </BrowserRouter>
    <Counter/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
