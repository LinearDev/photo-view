import Images from './content/Images'
import SideBar from './content/SideBar'
import './templates.css'

export default function Content() {
  return (
    <div className="content container">
        <SideBar />
        <Images />
    </div>
  )
}
