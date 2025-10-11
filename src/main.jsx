import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootLayout from './layouts/root.layout';
import MainLayout from './layouts/main.layout';
import Home from './pages/home.page';
import AboutPage from './pages/about.page';
import ProjectsPage from './pages/project.page';
import ProjectDetailPage from './pages/projectDetail.page';
import ContactPage from './pages/contact.page';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
          <Route element={<RootLayout />}>
            <Route element={<MainLayout />}>
            <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
       <Route path="/projects/:id" element={<ProjectDetailPage/>} />
       <Route path="/contact" element={<ContactPage/>} />
            </Route>
          </Route>
          </Routes>
  </BrowserRouter>
  </StrictMode>,
)
