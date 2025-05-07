import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx(ErrorBoundary, { children: _jsx(Provider, { store: store, children: _jsx(HelmetProvider, { children: _jsx(Router, { ...router, children: _jsxs("div", { className: "min-h-screen bg-dark text-white", children: [_jsx(Header, {}), _jsx("main", { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/services", element: _jsx(Services, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "/legal", element: _jsx(Legal, {}) }), _jsx(Route, { path: "/legal/gdpr", element: _jsx(GDPR, {}) })] }) }), _jsx(Footer, {})] }) }) }) }) }));
}
