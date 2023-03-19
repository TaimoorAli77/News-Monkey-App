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
        <Route path="/" element={<News pageSize={5} country="in" category="general"/>} />

        <Route path="/science" element={<News pageSize={5} country="in" category="science"/>} />
        <Route path="/business" element={<News pageSize={5} country="in" category="business"/>} />
        <Route path="/entertainment" element={<News pageSize={5} country="in" category="entertainment"/>} />
        <Route path="/general" element={<News pageSize={5} country="in" category="general"/>} />
        <Route path="/health" element={<News pageSize={5} country="in" category="health"/>} />
        <Route path="/sports" element={<News pageSize={5} country="in" category="sports"/>} />
        <Route path="/technology" element={<News pageSize={5} country="in" category="technology"/>} />
        
        </Routes>
        </BrowserRouter>
      </div> </React.Fragment>
    )
  }
}

