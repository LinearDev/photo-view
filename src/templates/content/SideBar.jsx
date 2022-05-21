import { useSelector } from 'react-redux'
import '../templates.css'

export default function SideBar() {
  const data = useSelector(state => state.data)
  return (
    <div className='sideBar col-md-2'>
      <div className="container">Filter by: 
        <select style={{marginLeft: '7px'}}>
          <option value={''} selected></option>
          {data.map(albums => {
            return <option value={albums.albumName}>{albums.albumName}</option>
          })}
        </select>
      </div>
    </div>
  )
}
