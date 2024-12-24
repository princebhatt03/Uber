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
import CaptainLogout from './pages/CaptainLogout';
import CaptainHome from './pages/CaptainHome';
import CaptainProtectWrapper from './pages/CaptainProtectWrapper';
import Riding from './pages/Riding';
import CaptainRiding from './pages/CaptainRiding';
import 'remixicon/fonts/remixicon.css';

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
        <Route
          path="/captain/logout"
          element={
            <CaptainProtectWrapper>
              <CaptainLogout />
            </CaptainProtectWrapper>
          }
        />
        <Route
          path="/captain-home"
          element={
            <CaptainProtectWrapper>
              <CaptainHome />
            </CaptainProtectWrapper>
          }
        />
        <Route
          path="/riding"
          element={<Riding />}
        />
        <Route
          path="/captain-riding"
          element={<CaptainRiding />}
        />
      </Routes>
    </div>
  );
}

export default App;
