import React from 'react'
import Article from '../../pages/Article/Article';
import Home from '../../pages/Home/Home'
import ErrorPage from '../PageError/PageError'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
  <BrowserRouter>  
    <Routes>
     <Route path="/search" element={<Article/>}/>  
    <Route path="/" element={<Home/>}></Route>
    <Route path="/error" element={<ErrorPage/>}></Route>
    </Routes>
 </BrowserRouter>
    </>
  )
}

export default App
