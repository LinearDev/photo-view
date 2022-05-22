import React from 'react'
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux'
import '../templates.css'

export default function SideBar({ data }) {
  const changeFilter = useDispatch()
  const filter = useSelector(state => state.filter.filter)

  const changeFilt = (e) => {
    changeFilter({type: 'CHANGE_FILTER', payload: e.target.value})
  }
  return (
    <div className='sideBar col-md-2'>
      <div className="container">Filter by: 
        <select value={filter} onChange={(e) => changeFilt(e)} style={{marginLeft: '7px'}}>
          <option value={''}></option>
          {data.map(albums => {
            return <option key={Math.random()} value={albums.albumName}>{albums.albumName}</option>
          })}
        </select>
      </div>
    </div>
  )
}

SideBar.propTypes = {
  data: PropTypes.array
}