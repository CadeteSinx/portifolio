import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Archives  from './assets/screens/Archives';
import About  from './assets/screens/About';
import Skills  from './assets/screens/Skills';
import Blog  from './assets/screens/Blog';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="Archives" element={<Archives />}>
      </Route>
      <Route path="Archives/:tag" element={<Archives />} />
      <Route path="/:blog" element={<Blog />} />
      
      <Route path="/About" element={<About />}/>
      <Route path="/Skills" element={<Skills />}/>



    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
