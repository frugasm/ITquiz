import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import SignInPage from './Registration/SignInPage';
import SignUpPage from './Registration/SignUpPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}
