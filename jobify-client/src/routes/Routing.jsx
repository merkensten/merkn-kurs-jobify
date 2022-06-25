// Imports
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Pages
import { Landing, Register, Error, Dashboard } from '../pages';

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Dashboard</div>}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
