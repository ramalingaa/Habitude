import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom"
import { AuthProvider, HabitProvider } from "./frontend/context/index-context"

// Call make Server
makeServer();


const root = ReactDOMClient.createRoot(document.getElementById("root"))
root.render(
  
              <React.StrictMode>
                <Router>
                  <AuthProvider>
                    <HabitProvider>
                        <App />
                    </HabitProvider>
                  </AuthProvider>
                </Router>
              </React.StrictMode>
            
            )


