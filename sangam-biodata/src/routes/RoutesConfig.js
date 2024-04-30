// RoutesConfig.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import HomePage from '../pages/HomePage/HomePage';
import ServicesPage from '../pages/ServicesPage/ServicesPage';
import AboutPage from '../pages/AboutPage/AboutPage';
import ContactPage from '../pages/ContactPage/ContactPage';
import TemplateSalePage from '../pages/TemplateSalePage/TemplateSalePage';
import AuthPage from '../pages/AuthPage/AuthPage';
import BuilderPage from '../pages/BuilderPage/BuilderPage';

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/templates" element={<TemplateSalePage />} />
      <Route path="/auth" element={<AuthPage />} />
      {/* Protected Routes */}
      <Route
        path="/builder"
        element={
          <ProtectedRoute>
            <BuilderPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default RoutesConfig;