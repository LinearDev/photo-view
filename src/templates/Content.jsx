import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Images from './content/Images'
import SideBar from './content/SideBar'
import './templates.css'

export default function Content() {
  const reduxData = useSelector(state => state.db.data)
  const filter = useSelector(state => state.filter.filter)
  const searchValue = useSelector(state => state.search.word)
  const setFilter = useDispatch()

  let allImages = []
  let timeImages = []
  if (searchValue === '') {
    if (filter === '') {
      allImages = []
      reduxData.map(album => album.content.map(photo => allImages.push(photo)))
    } else {
      allImages = []
      reduxData.map(album => {
        if (album.albumName === filter) {
          album.content.map(photo => allImages.push(photo))
        }
      })
    }
  } else {
    if (filter === '') {
      reduxData.map(album => album.content.map(photo => timeImages.push(photo)))
      allImages = []
      timeImages.map(photo => {
        const pTitle = photo.title.toLowerCase();
        if (pTitle.includes(searchValue.toLowerCase())) {
          allImages.push(photo)
        }
      })
    } else {
      allImages = []
      reduxData.map(album => {
        if (album.albumName === filter) {
          album.content.map(photo => {
            const pTitle = photo.title.toLowerCase();
            if (pTitle.includes(searchValue.toLowerCase())) {
              allImages.push(photo)
            }
          })
        }
      })
    }
  }

  const [currentPage, setCurrentPage] = useState(1)
  const [imagesPerPage] = useState(10)

  const indexOfLastImage = currentPage * imagesPerPage
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImage = allImages.slice(indexOfFirstImage, indexOfLastImage)

  const paginate = (pageNum) => {setCurrentPage(pageNum); window.scrollTo(30, 0)}
  if (!allImages.length) {
    setFilter({type: "CHANGE_FILTER", payload: ''})
    return (
      <div className="content container">
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className='emptySearchBox col-md-12'>
          <div style={{fontSize: 24}} className='emptySearch'>
            Not Foud
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="content container">
          <SideBar data={reduxData} />
          <Images images={currentImage} imagesPerPage={imagesPerPage} totalImages={allImages.length} paginate={paginate} />
      </div>
    )
  }
}
