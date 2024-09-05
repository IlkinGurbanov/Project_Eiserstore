import React from 'react'
import './Logo.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Logo() {
  const responsive = { 
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  return (
    <>

<Carousel className='logocarusel' responsive={responsive}>
    <img className='logoimg' src="https://kontakt.az/wp-content/uploads/2020/03/hp_png.webp" alt="" />
    <img className='logoimg1' src="https://kontakt.az/wp-content/uploads/2020/03/Beurer_png.webp" alt="" />
    <img className='logoimg1' src="https://kontakt.az/wp-content/uploads/2020/03/Sony_png.webp" alt="" />
    <img className='logoimg3' src="https://kontakt.az/wp-content/uploads/2020/04/4_png.webp" alt="" />
    <img className='logoimg4' src="https://kontakt.az/wp-content/uploads/2020/03/Bosh_png.webp" alt="" />
    <img className='logoimg1' src="https://kontakt.az/wp-content/uploads/2020/03/Acer_png.webp" alt="" />
    <img className='logoimg7' src="https://kontakt.az/wp-content/uploads/2020/03/Panasonic_png.webp" alt="" />
    <img className='logoimg7' src="https://kontakt.az/wp-content/uploads/2020/03/Remington_png.webp" alt="" />
    <img className='logoimg7' src="https://kontakt.az/wp-content/uploads/2020/03/Hansa_png.webp" alt="" />
    <img className='logoimg7' src="https://kontakt.az/wp-content/uploads/2020/03/TOYOTA_png.webp" alt="" />
    <img className='logoimg7' src="https://kontakt.az/wp-content/uploads/2021/11/%D0%91%D0%B5%D0%B7-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-1_png.webp" alt="" />
    <img className='logoimg7' src="https://kontakt.az/wp-content/uploads/2022/10/Tefal-1200x1200_Logo_png.webp" alt="" />
    <img className='logoimg10' src="https://kontakt.az/wp-content/uploads/2020/03/Husaewei_png.webp" alt="" />
</Carousel>
    </> 
  )
}

export default Logo


