import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';





function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={<HomePage/>} />
          <Route path='/search' element={<SearchPage/>} />
        </Route>

        <Route path='/detail/:id' element={<DetailPage/>} />
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
