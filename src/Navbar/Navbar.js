import './index.css';
//import { ReactComponent as Settings } from './icons/settings.svg';
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Router, useNavigate } from "react-router-dom";
import Projects from '../pages/projects';





function Navbar() {

  return (
    <Navbars>
      <NavItem icon="V">
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbars>
  );
}

function Navbars(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#/" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    
    return (
      <a href="#/" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }
  let navigate = useNavigate();

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem
            goToMenu="settings">
            My Profile
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            goToMenu="animals">
            Animals
          </DropdownItem>

        </div>
      </CSSTransition>



      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon="<">
            <h2>Back</h2>
          </DropdownItem>
          <DropdownItem leftIcon="man">   My CV</DropdownItem>
        </div>
      </CSSTransition>



      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon="<">
            <h2>About</h2>
          </DropdownItem>
          <DropdownItem>
          <Router onClick={() =>{navigate("/projects")}}>Projects</Router>
          </DropdownItem>
        </div>
      </CSSTransition>

    </div>
  );
}

export default Navbar