// Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const Navigate = useNavigate();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("logIn"); 
    localStorage.removeItem("TotalItems")
    Navigate('/Home')
    window.location.reload();// remove token from local storage
    // perform any other necessary logout actions, such as redirecting to a login page
  };

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className='logo'>
        <Link to='/'> 🍴 Food_Gupta_Gi 🥘</Link>
      </div>

      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <Link to='/'>Home</Link>
        {localStorage.getItem("logIn") ? <Link className='Menu' to="/Cart">Cart</Link> : <></>}
        {localStorage.getItem("logIn") ? <Link className='Menu' to="/Order">Order</Link> : <></>}
        <Link to='/about'>About</Link>
        <Link to="/Contact">Contact</Link>
        {localStorage.getItem("logIn") ? <Link className='Menu' onClick={handleLogout}>Logout</Link> : <Link className='Menu' to="/LogIn">LogIn</Link>}
      </div>

      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
    </nav>
  );
};

export default Navbar;
