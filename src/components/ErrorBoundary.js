import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from 'react';
class ErrorBoundary extends Component {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {
                hasError: false,
                error: null
            }
        });
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, errorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return (_jsx("div", { className: "min-h-screen bg-dark text-white flex items-center justify-center p-4", children: _jsxs("div", { className: "max-w-md w-full bg-gray-800 rounded-lg p-8 shadow-lg", children: [_jsx("h1", { className: "text-2xl font-bold text-red-500 mb-4", children: "Something went wrong" }), _jsx("p", { className: "text-gray-300 mb-4", children: this.state.error?.message || 'An unexpected error occurred' }), _jsx("button", { onClick: () => window.location.reload(), className: "w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium", children: "Reload Page" })] }) }));
        }
        return this.props.children;
    }
}
export default ErrorBoundary;
