import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import HomePage from 'pages/HomePage/HomePage';
// import ServicesPage from 'pages/ServicesPage/servicesPage';
// import AboutPage from 'pages/AboutPage/AboutPage';
// import ContactPage from 'pages/ContactPage';
// import TemplateSalePage from 'pages/TemplateSalePage';
// import AuthenticationPage from 'pages/AuthenticationPage';
// import BuilderPage from 'pages/BuilderPage';

// component
import Header from 'components/Header/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/templates" element={<TemplateSalePage />} />
        <Route path="/auth" element={<AuthenticationPage />} />
        <Route path="/builder" element={<BuilderPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
