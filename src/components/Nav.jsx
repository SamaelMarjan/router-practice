import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav'>
      <div className='nav-sec'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/shop'>Shop</NavLink>
      </div>
    </div>
  );
}

export default Nav;