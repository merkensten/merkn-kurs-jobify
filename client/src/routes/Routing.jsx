// Imports
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import {
  Landing,
  Register,
  Error,
  AddJob,
  AllJobs,
  Profile,
  Stats,
  SharedLayout,
  ProtectedRoute,
} from '../exports/pages';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;