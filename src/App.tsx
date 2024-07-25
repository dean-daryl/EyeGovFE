import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/styles/App.css';

import Home from './pages/Home';
import DashboardLayout from './pages/DashboardLayout';
import RichTextEditor from './pages/RichTextEditor';
import Blog from './pages/Blog';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashboardLayout />} />
          <Route path="/article" element={<RichTextEditor />} />
          <Route path="/:id" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
