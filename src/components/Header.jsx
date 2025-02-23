import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const location =  useLocation()
  return (
    <div>

  <header className="bg-info-subtle">
    <nav className="navbar navbar-expand-lg p-0">
      <div className="container">
        <a className="navbar-brand fs-1" href="./index.html">Ecom<span className="text-danger">Nepal</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
          aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <i className="bi bi-list text-dark"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav m-auto my-lg-0 p-0 navbar-nav-scroll">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to={"/"}>Home</Link>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`} href="/products">Products</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${location.pathname === '/cart' ? 'active' : ''}`} href="/cart">Cart</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">Contact</a>
            </li>

          </ul>

          <div className="d-flex">
            <a href="/signup" className="btn btn-dark rounded-pill me-2">Register</a>
            <a href="login.html" className="btn btn-info rounded-pill">Login</a>
          </div>
        </div>


      </div>
    </nav>
  </header>


    </div>
  )
}

export default Header
