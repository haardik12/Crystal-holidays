import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import DestinationDetails from './pages/DestinationDetails'
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path='/:id'
              element={<DestinationDetails />}
            />
            <Route path='/about' element={<AboutUs />} />
          </Route>
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;