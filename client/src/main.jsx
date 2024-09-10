import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import { Profile, Home, Login, Register, Channel,BuyItems,Order, Events, BiddingEvent } from './pages';
import LandingPage from './components/MainLandingPage/MainLandingPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='profile' element={<Profile />} />
      <Route path='channel/:id' element={<Channel />} />
      <Route path='order/:id' element={<Order />} />
      <Route path='buy' element={<BuyItems />} />
      <Route path='events' element={<Events />} />
      <Route path='event/:id' element={<BiddingEvent />} />
      <Route path='landing-page' element={< LandingPage />} />
    </Route>
  )
);

const Layout = () => {
  return (
    <RouterProvider router={router} />
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
