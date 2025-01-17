import React from 'react'
import { createRoot } from 'react-dom/client';

import './index.css';
import { AppRouter } from './Router/App';
import { ContextProvider } from './contexts/ContextProvider';

createRoot(document.getElementById('root')).render(<App />)

function App() {
    return (
        <ContextProvider>
            <AppRouter />
        </ContextProvider>
    )
}
