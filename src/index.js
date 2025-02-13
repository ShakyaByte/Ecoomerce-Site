import React from "react"; // Ensure React is imported
import ReactDOM from "react-dom/client"; 
import { Provider } from "react-redux"; // For connecting Redux to React
import {store} from "./redux/store"; 
import App from "./App"; 
import "./index.css"; 

// React 18's createRoot API
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
