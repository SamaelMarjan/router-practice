import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import {data} from '../data';

const Single = () => {
  const history = useNavigate();

  const {id} = useParams();
  const [singleData, setSingleData] = useState(null);

  useEffect(() => {
    const singleData = data.find((singleData) => singleData.id === parseInt(id));
    if (singleData) {
      setSingleData(singleData)
    }
  }, [id])

  return (
    <div className='single'>
      <div className='single-data'>
        <div>
          Single
        </div>
        {
          singleData ? (
            <>
              <div className='single-data-map'>
                <div>
                  <img src={singleData.image} alt='imgs' />
                </div>
                <div>
                  <p>{singleData.title}</p>
                </div>
              </div>
            </>
          ) : (null)
        }
        <NavLink onClick={() => history(-1)}>back</NavLink>
      </div>
    </div>
  );
}

export default Single;