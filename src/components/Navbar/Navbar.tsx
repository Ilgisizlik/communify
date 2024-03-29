import React from 'react'
import { Link } from 'react-router-dom'
//css
import './Navbar.css'
//components
import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButton'

type NavbarType = {
  isLogin: boolean,
}

const Navbar = (props: NavbarType) => {

  return (
    <>
      <nav className="navbar-wrapper">
        <div className="navbar-components">

          <div className="navbar-logo">
            <Link to='/' className='link'>
              <img src={require(`../../assets/logos/large_logo.JPG`)} alt="img not found" />
            </Link>
          </div>

          <div className='navbar-buttons'>
            {!props.isLogin &&
              <PrimaryButton value='Login'/>
            }
          </div>

        </div>
      </nav >
    </>
  )
}

export default Navbar