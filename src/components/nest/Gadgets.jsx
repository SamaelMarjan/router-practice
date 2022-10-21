import React from 'react';
import { NavLink } from 'react-router-dom';

import {data} from '../../data';

const Gadgets = () => {
  return (
    <div className='gad'>
      <div className='gadgets'>
        {
          data.map((data) => {
            return (
              <>
              <div className='items'>
                <img src={data.image} alt='imgs' />
                <p>{data.title}</p>
                <p>{data.desc}</p>
                <p>${data.price}</p>
                <NavLink to={`${data.id}`}>View</NavLink>
              </div>
              </>
            );
          })
        }
      </div>
    </div>
  );
}

export default Gadgets;