import React from 'react'
import '../styles/Hero.css'
import HeroImage1 from '../images/hero-image-1.png'
import HeroImage2 from '../images/hero-image-2.png'
import HeroImage3 from '../images/hero-image-3.png'

const Hero = () => {
  return (
    <section id='hero'>
        <div className='hero--text'>
            <h1>
                Discover 
                <span className='the--best'> The Best </span>
                Furniture For 
                <span className='your--interior'> Your Interior</span>
            </h1>
            <p>We design pieces of furniture and objects that perfectly gap between Beauty and functionality</p>
            <div className="hero--buttons">
                <button className="shop--now">
                    <span>Shop Now</span> 
                    <span>
                        <svg width="30" height="20" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15 0.833374C6.90001 0.833374 0.333344 7.40004 0.333344 15.5C0.333344 23.6 6.90001 30.1667 15 30.1667C23.1 30.1667 29.6667 23.6 29.6667 15.5C29.6667 7.40004 23.1 0.833374 15 0.833374ZM12.0573 11.1094C11.8145 10.8579 11.6801 10.5211 11.6831 10.1715C11.6861 9.82191 11.8264 9.48749 12.0736 9.24028C12.3208 8.99307 12.6552 8.85285 13.0048 8.84981C13.3544 8.84677 13.6912 8.98116 13.9427 9.22404L19.276 14.5574C19.526 14.8074 19.6664 15.1465 19.6664 15.5C19.6664 15.8536 19.526 16.1927 19.276 16.4427L13.9427 21.776C13.6912 22.0189 13.3544 22.1533 13.0048 22.1503C12.6552 22.1472 12.3208 22.007 12.0736 21.7598C11.8264 21.5126 11.6861 21.1782 11.6831 20.8286C11.6801 20.479 11.8145 20.1422 12.0573 19.8907L16.448 15.5L12.0573 11.1094Z" fill="#F2C229"/>
                        </svg>
                    </span>
                </button>
                <button className='watch--video'>
                    <span className='watch--video--icon'>
                        <svg className='ellipse' width="34" height="20" viewBox="0 0 34 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33.5 3.6999C33.5 1.6565 31.8385 -0.0211166 29.8076 0.204111C26.6759 0.551411 23.6026 1.33952 20.6801 2.55004C16.6157 4.23357 12.9227 6.70116 9.81192 9.81192C6.70116 12.9227 4.23357 16.6157 2.55004 20.6801C0.866503 24.7445 -1.39838e-07 29.1007 0 33.5C1.39838e-07 37.8993 0.866503 42.2555 2.55004 46.3199C4.23357 50.3843 6.70116 54.0773 9.81192 57.1881C12.9227 60.2988 16.6157 62.7664 20.6801 64.45C23.6026 65.6605 26.6759 66.4486 29.8076 66.7959C31.8385 67.0211 33.5 65.3435 33.5 63.3001C33.5 61.2567 31.8354 59.6271 29.8124 59.3384C27.6531 59.0302 25.5361 58.4519 23.5119 57.6134C20.3453 56.3018 17.468 54.3792 15.0444 51.9556C12.6208 49.532 10.6982 46.6547 9.38657 43.4881C8.07491 40.3215 7.39981 36.9275 7.39981 33.5C7.39981 30.0725 8.07491 26.6785 9.38657 23.5119C10.6982 20.3453 12.6207 17.468 15.0444 15.0444C17.468 12.6207 20.3453 10.6982 23.5119 9.38657C25.5361 8.54813 27.6531 7.96979 29.8124 7.66162C31.8353 7.37291 33.5 5.7433 33.5 3.6999Z" fill="#F2C229"/>
                        </svg>

                        <svg className='play-icon' width="52" height="20" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_1_42)">
                                <path d="M26 0.125C13.9199 0.125 4.125 9.91992 4.125 22C4.125 34.0801 13.9199 43.875 26 43.875C38.0801 43.875 47.875 34.0801 47.875 22C47.875 9.91992 38.0801 0.125 26 0.125ZM33.0361 22.3369L22.3721 30.0957C22.3136 30.1377 22.2447 30.1628 22.1729 30.1682C22.1011 30.1736 22.0292 30.1591 21.9651 30.1263C21.9011 30.0935 21.8472 30.0437 21.8096 29.9823C21.772 29.9209 21.7521 29.8503 21.752 29.7783V14.2705C21.7517 14.1984 21.7715 14.1276 21.809 14.066C21.8465 14.0044 21.9004 13.9544 21.9646 13.9215C22.0288 13.8886 22.1009 13.8742 22.1728 13.8798C22.2447 13.8854 22.3137 13.9107 22.3721 13.9531L33.0361 21.707C33.0865 21.7427 33.1276 21.7899 33.156 21.8447C33.1843 21.8995 33.1991 21.9603 33.1991 22.022C33.1991 22.0837 33.1843 22.1445 33.156 22.1993C33.1276 22.2541 33.0865 22.3013 33.0361 22.3369Z" fill="#FBFDFD"/>
                            </g>
                            <defs>
                            <filter id="filter0_d_1_42" x="0.125" y="0.125" width="51.75" height="51.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_42"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_42" result="shape"/>
                            </filter>
                            </defs>
                        </svg>
                    </span>
                    <span>Watch Video</span>
                </button>
            </div>
            
        </div>
        <div className='hero--images'>
            <img src={HeroImage1} className='hero--image--1' alt="hero-1" />
            <img src={HeroImage2} className='hero--image--2' alt="hero-2" />
            <img src={HeroImage3} className='hero--image--3' alt="hero-3" />
        </div>
    </section>
  )
}

export default Hero