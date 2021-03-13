import React, { useEffect, useState, useMemo } from 'react';
import { Carousel } from 'antd';
import styles from './index.less'
import Swiper from 'swiper';
import "swiper/swiper.min.css"
import Visualization from '../Visualization/index';
import EnterpriseImage from '../EnterpriseImage/index';
import ProgressOfWork from '../ProgressOfWork/index';
// import BusinessEnvironment from '../BusinessEnvironment/index';

export default () => {

  const caroList = []

  useEffect(() => {
    new Swiper(".swiper-container",{
      loop:true,
      autoplay: true,
      pagination:{
          el:".swiper-pagination"
      }
    })
    return () => {

    };
  }, []);

  return (
      <div className="swiper-container" style={{height: '100%'}}>
          <div className="swiper-wrapper">
              <div className="swiper-slide">
                <EnterpriseImage />
              </div>
              <div className="swiper-slide">
                <ProgressOfWork />
              </div>
              <div className="swiper-slide">
                <Visualization />
              </div>
          </div>
          <div className="swiper-pagination"></div>
      </div>
  )
}
