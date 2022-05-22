import React from 'react'
import { useDispatch } from 'react-redux'

export default function Header () {
  const setSearch = useDispatch()
  
  const inputChange = (event) => {
    setSearch({type: "CHANGE_SEARCH", payload: event.target.value})
  }
  
  return (
    <header style={{background: 'rgb(248,249,250)'}}>
        <div className="container mid">
            <nav className="navbar navbar-light bg-light">
                <div style={{display: 'flex', fontSize: '30px'}} className="logoBox">React Photo</div>
                <div style={{display: 'flex'}} className="form-inline">
                    <input onChange={(event) => {inputChange(event)}} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </div>
            </nav>
        </div>
    </header>
  )
}