import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootLayout from './layouts/root.layout';
import MainLayout from './layouts/main.layout';
import HomePage from './pages/home.page';
import AboutPage from './pages/About.page';
import ProjectDetailPage from './pages/ProjectDetail.page';
import ProjectsPage from './pages/Project.page';
import ContactPage from './pages/contact.page';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage/>} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)