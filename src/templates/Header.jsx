import React from 'react'

export default function Header () {
  return (
    <header style={{background: 'rgb(248,249,250)'}}>
        <div className="container mid">
            <nav className="navbar navbar-light bg-light">
                <div style={{display: 'flex', fontSize: '30px'}} className="logoBox">React Photo</div>
                <form style={{display: 'flex'}} className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </div>
    </header>
  )
}