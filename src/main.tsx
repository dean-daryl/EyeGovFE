'use client';

import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import '../src/styles/index.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

const App = React.lazy(() => import('./App'));

const container = document.getElementById('root')!;

ReactDOMClient.createRoot(container).render(<App />);
