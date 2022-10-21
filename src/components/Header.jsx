import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Nav from './Nav';
import Home from '../pages/Home';
import About from '../pages/About';
import Shop from '../pages/Shop';
import Gadgets from '../components/nest/Gadgets';
import Mobile from '../components/nest/Mobile';
import Laptop from '../components/nest/Laptop';
import PC from '../components/nest/PC';
import Single from '../components/Single';
import Example from '../common/Example';

const Header = () => {
  return (
    <div>
        <Nav />
        <Routes>
            <Route index element={<Home />} />
            <Route path='/' exact element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/shop' element={<Shop />} >
              <Route index element={<Example />} />
                <Route path='gadgets/*' element={<Gadgets />} />
                <Route path='gadgets/:id' element={<Single />} />
                <Route path='mobile' element={<Mobile />} />
                <Route path='laptop' element={<Laptop />} />
                <Route path='pc' element={<PC />} />
            </Route>
        </Routes>
    </div>
  );
}

export default Header;