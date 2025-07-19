import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = ({ hideAuth = false }) => {
  const { userEmail, logoutUser } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <img
        src="../assets/whiteLogo.png"
        alt="Logo"
        style={{ height: '70px', width: '70px', marginRight: '10px', borderRadius: '0%' }}
      />
      <Link className="navbar-brand fw-bold text-warning" to="/">BinaryBooks</Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>

          <li className="nav-item">
            <button className="nav-link btn btn-link" onClick={() => {
              const aboutElement = document.getElementById("about");
              if (aboutElement) {
                aboutElement.scrollIntoView({ behavior: "smooth" });
              }
            }}>About</button>
          </li>

          {/* Books Dropdown */}
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">
              Books
            </Link>
            <ul className="dropdown-menu p-3" style={{ minWidth: '250px' }}>
              <li><Link className="dropdown-item" to="/category/Story">Story</Link></li>
              <li><Link className="dropdown-item" to="/category/Comic">Comic</Link></li>
              <li><Link className="dropdown-item" to="/category/Biopic">Biopic</Link></li>
              <li><Link className="dropdown-item" to="/category/Psychology">Psychology</Link></li>
              <li><Link className="dropdown-item" to="/category/Religion">Religion</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <form className="d-flex" onSubmit={handleSearch}>
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search books..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button className="btn btn-sm btn-warning" type="submit">Go</button>
                </form>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/cart">Cart</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/order">Order</Link>
          </li>

          {userEmail ? (
            <>
              <li className="nav-item">
                <span className="nav-link text-info">Hi, {userEmail.split('@')[0]}</span>
              </li>
              <li className="nav-item">
                <button className="btn btn-sm btn-outline-warning ms-2" onClick={logoutUser}>Logout</button>
              </li>
            </>
          ) : (
            !hideAuth && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Signup</Link>
                </li>
              </>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
