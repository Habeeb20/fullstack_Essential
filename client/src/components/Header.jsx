import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Navbar, Nav, Button, Dropdown } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <Navbar
    
    scrolling="true"
    light="true"
    expand="lg"
    fixed="top"
    variant="dark"
    bg="white"
    
  >
    <div className="container-fluid">
      <Navbar.Brand
        as={Link}
        to="/"
        onClick={() => setExpanded(false)}
       
      >
        <img
          src="../../../images/ebnb-logo.png"
          alt="Logo"
          className="logo-img"
          onClick={() => navigate("/")}
        />
      </Navbar.Brand>

      <Navbar.Toggle
        onClick={() => setExpanded((prevExpanded) => !prevExpanded)}
        className={navbarbrand ? "color" : "color text"}
      >
        <FontAwesomeIcon icon={faBars} size="lg" />
      </Navbar.Toggle>

      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-end"
      >
        <Nav className="mx-auto nav-link-text" onClick={handleNavLinkClick}>
          <Nav.Link
            as={Link}
            to="/"
            onClick={() => setExpanded(false)}
            className={
              navbarbrand
                ? "color text nav-link-text"
                : "color text nav-link-text"
            }
          >
            Home
          </Nav.Link>

          {(
            <Nav.Link
              onClick={() => setExpanded(false)}
              as={Link}
              to={"/dashboard"}
              
            >
              Dashboard
            </Nav.Link>
          )}

          {(
            <Nav.Link
              onClick={() => setExpanded(false)}
              as={Link}
              to={"/admin-dashboard"}
              
            
            >
              Dashboard
            </Nav.Link>
          )}

          {( 
            <Nav.Link
              as={Link}
              to={"/create-room/" + user?.id}
              onClick={() => setExpanded(false)}
             
            >
              Create Room
            </Nav.Link>
          )}

          <Nav.Link
            onClick={() => setExpanded(false)}
            
          >
            Estate Agents
          </Nav.Link>

          <Nav.Link
            onClick={() => setExpanded(false)}
            
          >
            Ebudget Hotels
          </Nav.Link>

          <Nav.Link
            onClick={() => setExpanded(false)}
            
          >
            Event Centres
          </Nav.Link>
          <Nav.Link
            onClick={() => setExpanded(false)}
          
          >
            Flight
          </Nav.Link>
        </Nav>

        <Nav className="sm">
          { (
            <Button
              style={{ background: "#2a2185" }}
              className="custom-button sm me-2"
              as={Link}
              to="/partner-register"
            >
              List Your Property
            </Button>
          )}

          {(
            <Link to={`/list-property/${user?.id}`}>
              <Button
                style={{ background: "#2a2185" }}
                className="custom-button mx-4"
              >
                List Your property
              </Button>
            </Link>
          ) }

          {(
            <Button
              style={{ background: "#2a2185" }}
              className="custom-button mx-4"
             
            >
              Logout
            </Button>
          )}

          { (
            <>
              <Button
                style={{ background: "#2a2185" }}
                className="custom-button sm"
                as={Link}
                to="/login"
              >
                Login
              </Button>
              <Button
                style={{ background: "#2a2185" }}
                className="custom-button mx-4"
                as={Link}
                to="/register"
              >
                Guest's Register
              </Button>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
    // <header className='bg-slate-200 shadow-md'>
    //   <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
    //     <Link to='/'>
    //       <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
    //         <span className='text-slate-500'>Dignity</span>
    //         <span className='text-slate-700'>Estate</span>
    //       </h1>
    //     </Link>
    //     <form
    //       onSubmit={handleSubmit}
    //       className='bg-slate-100 p-3 rounded-lg flex items-center'
    //     >
    //       <input
    //         type='text'
    //         placeholder='Search...'
    //         className='bg-transparent focus:outline-none w-24 sm:w-64'
    //         value={searchTerm}
    //         onChange={(e) => setSearchTerm(e.target.value)}
    //       />
    //       <button>
    //         <FaSearch className='text-slate-600' />
    //       </button>
    //     </form>
    //     <ul className='flex gap-4'>
    //       <Link to='/'>
    //         <li className='hidden sm:inline text-slate-700 hover:underline'>
    //           Home
    //         </li>
    //       </Link>
    //       <Link to='/about'>
    //         <li className='hidden sm:inline text-slate-700 hover:underline'>
    //           About
    //         </li>
    //       </Link>
    //       <Link to='/profile'>
    //         {currentUser ? (
    //           <img
    //             className='rounded-full h-7 w-7 object-cover'
    //             src={currentUser.avatar}
    //             alt='profile'
    //           />
    //         ) : (
    //           <li className=' text-slate-700 hover:underline'> Sign in</li>
    //         )}
    //       </Link>
    //     </ul>
    //   </div>
    // </header>
  );
}
