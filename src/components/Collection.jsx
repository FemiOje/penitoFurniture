import React from 'react'
import '../styles/Collection.css'

const Collection = () => {
  return (
    <section id='collection'>
        <div className="collection--text">
          <h3>A Huge Collection of Furniture Products for your Interior</h3>
          <p>If you have the experience of ten years in an industry, no apostrohe is needed. If you have ten years’ experience, an apostrophe is needed.</p>
        </div>
        
        <div className="collection--nav">
          <button>All Furniture</button>
          <button>Living Room</button>
          <button>Office</button>
          <button>Bedroom</button>
          <button>Sofas</button>
          <button>Outdoor</button>
          <button>Kitchen</button>
          <button>More</button>
        </div>
    </section>
  )
}

export default Collection