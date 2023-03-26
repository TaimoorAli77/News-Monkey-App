import './App.css';
import React,{useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter , Routes, Route } from "react-router-dom";


const App =(props)=> {
  
  const pageSize=5;
  const apiKey= '294854925da0498795661fcf91443ddc'
const [progress, setProgress] = useState(0);

    return ( <React.Fragment>
      <div>
           <BrowserRouter> 
        <NavBar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
        <Routes>
        <Route path="/" element={<News setProgress={setProgress}  apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>} />

        <Route path="/science" element={<News setProgress={setProgress}  apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>} />
        <Route path="/business" element={<News setProgress={setProgress}  apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>} />
        <Route path="/entertainment" element={<News setProgress={setProgress}  apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>} />
        <Route path="/general" element={<News setProgress={setProgress}  apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>} />
        <Route path="/health" element={<News setProgress={setProgress}  apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>} />
        <Route path="/sports" element={<News setProgress={setProgress}  apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>} />
        <Route path="/technology" element={<News setProgress={setProgress}  apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>} />
        
        </Routes>
        </BrowserRouter>
      </div> </React.Fragment>
    )
  }

  export default App
