

import CustomNav from './CustomNav'
import Logo from './Logo'



function Header() {
  return (
    <div className='header bg-white p-4 shadow-lg sticky-top z-50'>

        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-lg-3">
                    <Logo />
                </div>


                <div className="col-12 col-lg-9">
                    <CustomNav classNameUl={"nav justify-content-end fs-5"} slice1={0} slice2={4}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header