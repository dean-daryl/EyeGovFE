import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/styles/App.css';

import Home from './pages/Home';
import DashboardLayout from './pages/DashboardLayout';
import RichTextEditor from './pages/RichTextEditor';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="/article" element={<RichTextEditor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
