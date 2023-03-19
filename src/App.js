import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter , Routes, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return ( <React.Fragment>
      <div>
           <BrowserRouter> 
        <NavBar/>
        <Routes>
        <Route path="/science" element={<News pageSize={5} country="in" category="science"/>} />
        
        </Routes>
        </BrowserRouter>
      </div> </React.Fragment>
    )
  }
}

