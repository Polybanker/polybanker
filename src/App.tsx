// React is automatically imported by the JSX transform in React 17+
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import store from './store';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import GDPR from './pages/legal/GDPR';
import Legal from './pages/legal';
import ErrorBoundary from './components/ErrorBoundary';

const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
};

export default function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <HelmetProvider>
          <Router {...router}>
            <div className="min-h-screen bg-dark text-white">
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/legal" element={<Legal />} />
                  <Route path="/legal/gdpr" element={<GDPR />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </HelmetProvider>
      </Provider>
    </ErrorBoundary>
  );
}