'use client';

import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import '../src/styles/index.css';
import '../node_modules/froala-editor/css/froala_style.min.css';
import '../node_modules/froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import { Provider } from 'react-redux';
import store from './store/store';

const App = React.lazy(() => import('./App'));

const container = document.getElementById('root')!;

ReactDOMClient.createRoot(container).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
