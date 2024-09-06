import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Layout from './core/Layout';
import Admin from './pages/Admin';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />;
  }

  return children;
};


const ProtectedAdminRoute = ({ children }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  if (!isAuthenticated || user.user?.role?.name !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Layout>
                <Home />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route path='/register' element={<Register />} />
        <Route
          path='/admin'
          element={
            <ProtectedAdminRoute>
              <Layout>
                <Admin />
              </Layout>
            </ProtectedAdminRoute>
          }
        />
      </Routes>
    </Router>
  );
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

ProtectedAdminRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppRouter;
