import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';
import Home from './pages/Home';
import FrontPage from './pages/FrontPage';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<FrontPage />}
        />
        <Route
          path="/login"
          element={<UserLogin />}
        />
        <Route
          path="/signup"
          element={<UserSignup />}
        />
        <Route
          path="/captain-login"
          element={<CaptainLogin />}
        />
        <Route
          path="/captain-signup"
          element={<CaptainSignup />}
        />
        <Route
          path="/home"
          element={<Home />}
        />
      </Routes>
    </div>
  );
}

export default App;
