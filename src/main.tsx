import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';

const App = React.lazy(() => import('./App'));

import { HashRouter } from 'react-router-dom';

const container = document.getElementById('root')!;

const root = ReactDOMClient.createRoot(container).render(
        <App />
);
