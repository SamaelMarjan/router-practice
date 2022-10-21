import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Shop = () => {
  return (
    <div className='shop'>
      <div className='shop-sec'>
        <div className='title'>Products</div>
        <div className='shop-link'>
          <div className='link'>
            <NavLink to='gadgets' className='links'>Gadgets</NavLink>
            <NavLink to='mobile' className='links'>Mobile</NavLink>
            <NavLink to='laptop' className='links'>Laptop</NavLink>
            <NavLink to='pc' className='links'>PC</NavLink>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop