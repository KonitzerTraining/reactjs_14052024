import { BrowserRouter, Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import { StartPage } from './pages/start/StartPage';
import { HelpIndex } from './pages/help/HelpIndex';

import { AboutPage } from './pages/about/AboutPage';
import { CustomerIndex } from './pages/customers/CustomerIndex';
import { MainNavigation } from './MainNavigation';

function App() {


  return (
    <BrowserRouter>
      <MainNavigation />
      
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/dashboard" element={<CustomerIndex />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/help" element={<HelpIndex />} />

        <Route path="*" element={<h1>Seite nicht gefunden</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
