import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carousel  from './0_landingpage';
import RegisterForm from  './1_Registrationform';
import ComingSoon from './2_comingsoon';
const fileUrl = 'https://drive.google.com/file/d/13WUNn-HtD9o5uZIUOEJO4IBGVTRwOIDz/view?usp=sharing';

function App() {
  return (
    <Fragment>
    <Router>
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path='/Register' element={<RegisterForm />} />
          <Route path='/Know_the_Star' element={<ComingSoon />} />
          <Route path='/Know_the_Alumni' element={<ComingSoon />} />
          <Route path='/Register4speakersession' element={<ComingSoon />} />
        </Routes>
    </Router>
  </Fragment>
);
}

export default App;
