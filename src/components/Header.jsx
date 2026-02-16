import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'

function Header() {
  return (
    <div className='header bg-white shadow-lg sticky-top z-3 py-2'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-lg-3 ">
                        <Logo />
                </div>

                <div className="col-12 col-lg-9 d-inline-flex justify-content-center justify-content-lg-end">
                    <Navbar start={0} end={4} decorationUl={"nav"} decorationLi={"nav-items"}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header