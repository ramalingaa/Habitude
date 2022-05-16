import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom"
import { HabitProvider } from "./frontend/context/index-context"
import store from "./reduxStore/store"
import { Provider } from "react-redux"

// Call make Server
makeServer();


const root = ReactDOMClient.createRoot(document.getElementById("root"))
root.render(
  
              <React.StrictMode>
                <Provider store={store}>
                  <Router>
                      <HabitProvider>
                          <App />
                      </HabitProvider>
                  </Router>
                </Provider>
              </React.StrictMode>
            
            )


