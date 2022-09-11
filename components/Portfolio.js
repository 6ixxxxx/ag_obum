import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import BB from "../public/assets/Portraits/BB.jpg"
import IMG_4548 from "../public/assets/Portraits/IMG_4548.jpg"
import IMG_5008 from "../public/assets/Portraits/IMG_5008.jpg"
import IMG_6477 from "../public/assets/Portraits/IMG_6477.jpg"
import IMG_6865 from "../public/assets/Portraits/IMG_6865.jpg"
import IMG_7610 from "../public/assets/Portraits/IMG_7610.jpg"
import IMG_7924 from "../public/assets/Portraits/IMG_7924.jpg"
import IMG_8097 from "../public/assets/Portraits/IMG_8097.jpg"
import IMG_4494 from "../public/assets/Documentaries/IMG_4494.JPG"
import IMG_4500 from "../public/assets/Documentaries/IMG_4500.JPG"
import IMG_4503 from "../public/assets/Documentaries/IMG_4503.JPG"
import IMG_4505 from "../public/assets/Documentaries/IMG_4505.JPG"
import IMG_4564 from "../public/assets/Documentaries/IMG_4564.JPG"
import Carousel from "nuka-carousel/lib/carousel";

const Portfolio = () => {

  const [windowSize, setWindowSize] = useState(2);

  useEffect(() => { 

    function getWindowSize() {
      const {innerWidth, innerHeight} = window;
      return {innerWidth, innerHeight};
    }

    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
   
    function showIt(){
      setWindowSize(getWindowSize());
    }

     window.addEventListener('load', showIt )
    
     window.addEventListener('resize', handleWindowResize)

     return () => {
       window.removeEventListener('load', showIt);
       window.removeEventListener('resize', handleWindowResize);
     };



  }, []);

  

var carouselNumber = () =>  {if (windowSize.innerWidth <= 650) { return 1 } 
  else if (windowSize.innerWidth <= 970){ return 2 } 
  else if (windowSize.innerWidth <= 1322){ return 3 } 
  else if (windowSize.innerWidth <= 1736){ return 4 } 
  else if (windowSize.innerWidth > 1736){ return 5 } 
  else {return 2}}

  
 // const gg = (windowSize.innerWidth <= 330) ? renderBottomCenterControls="null" : (null) ;

  return (
    <div className="portfolio" id="portfolio">
      <h1 className="title">Portfolio</h1>
      

      
      <>
      <div className="card">
        <h3 className="title">Portraits </h3>
        <Carousel 
          wrapAround={true}
          slidesToShow={carouselNumber()}
          cellAlign={'center'}
          animation={"zoom"}
          zoomScale={0.8}
          autoplay={true}
          autoplayInterval={4000}
          speed={2000}
          
          >
            {[BB, IMG_5008, IMG_4548, IMG_6477, IMG_6865, IMG_7610, IMG_7924, IMG_8097].map((path) => {
              return (
                <Image className="port-img" 
                placeholder='blur'

                alt='Portrait' src={path} key={path}/>
              )
            })}
          </Carousel>
      </div>

      <div className="card">
        <h3 className="title">Documentaries</h3>
        <Carousel 
          wrapAround={true}
          slidesToShow={carouselNumber()}
          cellAlign={'center'}
          animation={"zoom"}
          zoomScale={0.8}
          autoplay={true}
          autoplayInterval={4000}
          speed={2000}>
            {[IMG_4494, IMG_4500, IMG_4503, IMG_4505, IMG_4564].map((path) => {
              return (
                <Image className="port-img" 
                blurDataURL='assets/AG.png'
                alt='documentary' src={path} key={path}/>
              )
            })}
         </Carousel>
      </div>
      </>
      
    </div> )
  
}

export default Portfolio