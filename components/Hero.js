import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import IntroImg from "../public/assets/AGbg.png"
import IntroImgsm from "../public/assets/AGbgmini.png"

const Hero = () => {

  

  const [windowSize, setWindowSize] = useState(2);

  useEffect(() => {

    function getWindowSize() {
      const {innerWidth, innerHeight} = window;
      return {innerWidth, innerHeight};
    }
  

    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };

    

  }, []);

  

var BgImg = () =>  {if (windowSize.innerWidth <= 900) { return IntroImgsm }
  else {return IntroImg}}
  return (
    <div className="home">
      <div className="mask">
                    <Image className="home--image" 
                    src={BgImg()} alt="ag baby"
                    layout='fill' />
                </div>

      <div className="home--content">

          <div className="home--content-text">
                  <h1>AG PHOTOGRAPHY</h1>
                  <h3>Portraits | Weddings | Events | Documentaries</h3>

                  <p>
                    AG Obum is a team of photographers, who thrive everyday to make an image better than the last image they took before it. <br />
                    In doing so, we produce photographs that stand out in the market of today, which is quite competitive. <br />
                    In the end, we want to create stunning shots that are as individual as the subjects they depict. </p>
                    <p>
                    The team varies from photographers with different skill sets and niches. <br />
                    As a result of our constant exploration of novel approaches that broaden our skill set, our editing, lighting, and aesthetic are also always changing. <br />
                    Each image is carefully adjusted so that we can bring out the nuances without diluting the originality of the image.
                  </p>
          </div> 
      </div>
    </div>
  )
}

export default Hero