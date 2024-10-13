import React, { useRef } from 'react'
import Slider from "react-slick";
import Slideritem from './Slideritem';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const AchieveCarousel = ({files, canva=false}) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SlArrowLeft/>,
    nextArrow:  <SlArrowRight/>,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
            arrows: false
        }
      }
    ]
  }

  const slider = useRef(null);  

  return (
    <>
      <Slider ref={slider} {...settings}>
        {files.map(item => 
          <Slideritem item={item} key={item.file} canva={canva}/>
        )}
      </Slider>
    </>
    
  );
}

export default AchieveCarousel