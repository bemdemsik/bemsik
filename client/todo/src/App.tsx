import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import {Header} from "./components/todos/Header/Header";
import { ShowUsers } from './components/users/ShowUsers/ShowUsers';
import { ShowTodos } from './components/todos/ShowTodos/ShowTodos';
import { Navigation } from './components/navigation/navigation';
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <div className={'container'}>
        <Router>
          <div className={'columnNav'}>
            <Navigation />
          </div>
          <div className={'columnApp'}>
            <Routes>
              <Route path={'/users'} element={<ShowUsers/>}/>
              <Route path={'/todos'} element={<ShowTodos/>}/>
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
