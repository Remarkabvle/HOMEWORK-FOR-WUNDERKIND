import React from 'react';
import { useGetProductsQuery } from '../../context/api/prductApi';
import omg from '../../assets/lololololol.jpg';

const Home = () => {
  const { data: products } = useGetProductsQuery({ limit: 100 });

  return (
    <div className='wrapper'>
      {
        products?.data?.products?.map(el => (
          <div className='card' key={el.id}>
            <img
              width={200}
              src={el.urls && el.urls[0] ? el.urls[0] : omg}
              alt={el.title}
              onError={(e) => { e.target.src = omg; }}
            />
            <h3>{el.title}</h3>
          </div>
        ))
      }
    </div>
  );
}

export default Home;
