import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import RequireAuth from './RequireAuth';
import { Layout, Login, Signup, Leaderboard, GameWizard, Home } from '../pages';

export const UnivilleRouter = () => {
  const [isAuth, setAuth] = useState(true);
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);
  useEffect(() => {}, [isAuth]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/Game"
          element={
            <RequireAuth isAuth={true}>
              <GameWizard />
            </RequireAuth>
          }
        />
        <Route
          path="/Leaderboard"
          element={
            <RequireAuth isAuth={true}>
              <Leaderboard />
            </RequireAuth>
          }
        />
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};
