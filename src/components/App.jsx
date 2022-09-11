import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
    </Routes>
  )
}
