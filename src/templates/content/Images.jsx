import { useSelector } from 'react-redux'
import '../templates.css'

export default function Images() {
  const images = useSelector(state => state.data)
  return (
    <div className='row col-md-10'>
        {images.map(album => {
            //console.log(album.albumName)
            return album.content.map(photo => {
                return (
                    <div className="col-md-3">
                        <div style={{backgroundImage: `url(${photo.src})`}} className='imagebg' />
                        <h4 className='imageTitle'>{photo.title}</h4>
                        <p className='imageSubText'>{photo.desc}</p>
                    </div>
                )
            })
        })}
    </div>
  )
}
