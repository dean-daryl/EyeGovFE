import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/styles/App.css';

import Home from './pages/Home';
import DashboardLayout from './pages/DashboardLayout';
import RichTextEditor from './pages/RichTextEditor';
import Blog from './pages/Blog';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="/article" element={<RichTextEditor />} />
        <Route path="/:id" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
