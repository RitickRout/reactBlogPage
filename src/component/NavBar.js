import React from 'react'
import {Link} from 'react-router-dom'
export default function NavBar() {
  return (
    <div className='nav-Bar'>
 <h1><span className='rotate'>The</span>Siren</h1>
    <nav >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bollywood">Bollywood</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hollywood">Hollywood</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fitness">Fitness</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/food">Food</Link>
              </li>
            </ul>
      </nav>
    </div>)
}
