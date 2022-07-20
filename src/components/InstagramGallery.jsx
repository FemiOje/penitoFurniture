import React from 'react'
import '../styles/InstagramGallery.css'
import GalleryPhoto1 from '../images/gallery-photo-1.png'
import GalleryPhoto2 from '../images/gallery-photo-2.png'
import GalleryPhoto3 from '../images/gallery-photo-3.png'
import GalleryPhoto4 from '../images/gallery-photo-4.png'
import GalleryPhoto5 from '../images/gallery-photo-5.png'
const InstagramGallery = () => {
  return (
    <section id='instagram--gallery'>
      <h2>Visit Our Instagram Gallery</h2>
      <div className="gallery--photos">
        {/* <div className='photo--container'> */}
          <img src={GalleryPhoto1} alt="gallery-1" />
          {/* <div className='instagram--icon'>
            <svg width="61" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.219513 30.0361C0.220409 32.7542 1.16102 35.3904 2.88562 37.5084C4.61023 39.6264 7.0154 41.0992 9.70299 41.6829L10.9868 37.8788C9.81118 37.6876 8.69317 37.2411 7.71334 36.5716C6.7335 35.9021 5.91623 35.0263 5.32043 34.0072H10.2805C11.3478 34.0072 12.3714 33.5884 13.1262 32.8429C13.8809 32.0974 14.3049 31.0864 14.3049 30.0321V22.0821C14.3049 21.0279 13.8809 20.0168 13.1262 19.2714C12.3714 18.5259 11.3478 18.1071 10.2805 18.1071H4.36866C4.8597 14.265 6.75328 10.732 9.69408 8.17089C12.6349 5.6098 16.4208 4.19667 20.3415 4.19667C24.2621 4.19667 28.048 5.6098 30.9888 8.17089C33.9297 10.732 35.8232 14.265 36.3143 18.1071H30.4024C29.3351 18.1071 28.3115 18.5259 27.5568 19.2714C26.802 20.0168 26.3781 21.0279 26.3781 22.0821V30.0321C26.3781 31.0864 26.802 32.0974 27.5568 32.8429C28.3115 33.5884 29.3351 34.0072 30.4024 34.0072H36.439C37.5064 34.0072 38.53 33.5884 39.2847 32.8429C40.0394 32.0974 40.4634 31.0864 40.4634 30.0321V20.0946C40.4634 9.11759 31.4548 0.219513 20.3415 0.219513C9.22811 0.219513 0.219513 9.11759 0.219513 20.0946V30.0361Z" fill="#FF89A8" />
            </svg>
          </div> */}
        {/* </div> */}
        
        <img src={GalleryPhoto2} alt="gallery-2" />
        <img src={GalleryPhoto3} alt="gallery-3" />
        <img src={GalleryPhoto4} alt="gallery-4" />
        <img src={GalleryPhoto5} alt="gallery-5" />
      </div>
    </section>
  )
}

export default InstagramGallery