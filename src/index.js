import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./components/card/design/style.module.css"
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/dashboard";
import { Analytics } from "./pages/analytics/analytics";
import { Wallet } from "./pages/wallet/wallet";
import { Account } from "./pages/account/account";
import { Card, MainView } from "./components/card/card";

import './pages/analytics/design/style.module.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App/>}>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/analytics" element={<Analytics/>}/>
          <Route path="/wallet" element={<Wallet/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/card" element={<Card/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
