import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
//css
import './Navbar.css'
//components
import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButton'
import SecondaryButton from '../Buttons/SecondaryButton/SecondaryButton'

type NavbarType = {
  isLogin: boolean,
}

const Navbar = (props: NavbarType) => {
  const navigate = useNavigate()

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
              <>
                <PrimaryButton value='Login' width="120px" height="40px" onClickFunction={() => navigate("/login")}/>
                <SecondaryButton value='Sign Up' width="120px" height="40px" onClickFunction={() => navigate("/register")}/>
              </>
            }
          </div>

        </div>
      </nav >
    </>
  )
}

export default Navbar