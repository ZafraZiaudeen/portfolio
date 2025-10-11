import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootLayout from './layouts/root.layout';
import MainLayout from './layouts/main.layout';
import Home from './pages/Home.page';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
          <Route element={<RootLayout />}>
            <Route element={<MainLayout />}>
<Route path="/" element={<Home/>} />
            </Route>
          </Route>
          </Routes>
  </BrowserRouter>
  </StrictMode>,
)
