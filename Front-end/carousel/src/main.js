import React, { useEffect, useState } from 'react';
//import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

const MainPage = () =>{

  const [carousel , setCarousel] = useState([]);

  useEffect(()=> {
    getData();
    
    async function getData(){
        const response = await fetch("http://localhost:3600/api/carousel?slides=10");
        const data = await response.json();
        
        setCarousel(data);            
    }
  }, []);

  console.log(carousel);

  return(
    <Carousel fade>
     {carousel.map((car) => (
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={car.image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{car.subtitle}</h3>
          <p>{car.title}</p>
        </Carousel.Caption>
      </Carousel.Item>
        ))
     }
    </Carousel>
  );
}

export default MainPage;