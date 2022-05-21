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
                        <div style={{backgroundImage: `url(/logo192.png)`}} className='imagebg' />
                        <h4 className='imageTitle'>{photo.title}</h4>
                        <p className='imageSubText'>description</p>
                    </div>
                )
            })
        })}
    </div>
  )
}
