import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter , Routes, Route } from "react-router-dom";
export default class App extends Component {
  pageSize=5
  apiKey= '294854925da0498795661fcf91443ddc'
  state ={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return ( <React.Fragment>
      <div>
           <BrowserRouter> 
        <NavBar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
      />
        <Routes>
        <Route path="/" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/>} />

        <Route path="/science" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science"/>} />
        <Route path="/business" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business"/>} />
        <Route path="/entertainment" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>} />
        <Route path="/general" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/>} />
        <Route path="/health" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health"/>} />
        <Route path="/sports" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports"/>} />
        <Route path="/technology" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology"/>} />
        
        </Routes>
        </BrowserRouter>
      </div> </React.Fragment>
    )
  }
}

