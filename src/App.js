import React, { useState,useReducer } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css'
import Sidebar from './Sidebar'
import Chat from './Chat'
import Login from './Login';
import { useStateValue } from './StateProvider';

export default function App() {

  const [{user},dispatch]=useStateValue();
  return (
    <div className="app">
      {!user ? <Login /> :
        (
          <div className="app_body">
            <Router>
              <Sidebar />
              <Switch>
                <Route path="/rooms/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <Chat />
                </Route>
              </Switch>
            </Router>
          </div>
        )
      }
    </div>

  );
}
