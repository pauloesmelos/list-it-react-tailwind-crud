import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import Page from './components/auth/Page.jsx';
import MobileMenu from './components/html/menu/MobileMenu.jsx';
import NavBar from './components/html/nav-bar/NavBar.jsx';
import Error404 from './components/pages/Error404.jsx';
import './css/tailwind.css';
import { GlobalContextData } from './global/GlobalContext.jsx';
import { GlobalModalProvider } from './global/GlobalModal.jsx';

const client = new QueryClient();

// deixar a NavBar dentro de BrowserRouter, assim poderemos utilizar o componente Link sem erro!

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <QueryClientProvider client={client}>
        <GlobalContextData>
          <BrowserRouter>
            <GlobalModalProvider>
              <Routes>
                <Route path="/" element={<Page />} />
                <Route path="/app" element={<App />} />
                <Route path="*" element={<Error404 />} />
              </Routes>
            </GlobalModalProvider>
          </BrowserRouter>
        </GlobalContextData>
      </QueryClientProvider>
  </React.StrictMode>,
)