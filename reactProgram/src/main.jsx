import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "/index.css";
import { StrictMode } from "react";
// import { Provider } from "react-redux";
// import store from "./ReduxToolkit/CounterApp/CounterStore.jsx";
// import ContextProvider from "./Hookcomponent/ContextComponent/AppContext.jsx";
// import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")).render(
  // <ContextProvider>
  //   <App />
  // </ContextProvider>
  <StrictMode>
    <App />
  </StrictMode>,
);
