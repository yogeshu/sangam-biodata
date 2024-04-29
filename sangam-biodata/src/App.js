import {
  BrowserRouter as Router,
} from 'react-router-dom';
import AuthPage from 'pages/AuthPage/AuthPage';

import HomePage from 'pages/HomePage/HomePage';
import ServicesPage from 'pages/ServicesPage/ServicesPage';
import AboutPage from 'pages/AboutPage/AboutPage';
import ContactPage from 'pages/ContactPage/ContactPage';
// import TemplateSalePage from 'pages/TemplateSalePage';
// import AuthenticationPage from 'pages/AuthenticationPage';
// import BuilderPage from 'pages/BuilderPage';

// component
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import RoutesConfig from 'routes/RoutesConfig';

function App() {
  return (
    <Router>
      <Header />
    <RoutesConfig/>
      <Footer />
    </Router>
  );
}

export default App;
