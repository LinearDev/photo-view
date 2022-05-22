import React from 'react'
import PropTypes from 'prop-types'
import Pagination from '../Pagination'
import '../templates.css'

export default function Images({ images, imagesPerPage, totalImages, paginate }) {
  return (
    <div className='row col-xl-10 col-md-12'>
        {images.map(photo => (
            <div key={Math.random()} className="col-md-3">
                <div style={{backgroundImage: `url(${photo.src})`}} className='imagebg' />
                <h4 className='imageTitle'>{photo.title}</h4>
                <p className='imageSubText'>{photo.desc}</p>
            </div>
        ))}
        <div className='col-md-12'>
            <Pagination paginate={paginate} imagesPerPage={imagesPerPage} totalImages={totalImages}/>
        </div>
    </div>
  )
}

Images.propTypes = {
  images: PropTypes.array,
  imagesPerPage: PropTypes.number,
  totalImages: PropTypes.number,
  paginate: PropTypes.func
}