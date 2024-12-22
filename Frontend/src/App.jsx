import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';
import Home from './pages/Home';
import FrontPage from './pages/FrontPage';
import UserProtectWrapper from './pages/UserProtectWrapper';
import UserLogout from './pages/UserLogout';

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
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/user/logout"
          element={
            <UserProtectWrapper>
              <UserLogout />
            </UserProtectWrapper>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
