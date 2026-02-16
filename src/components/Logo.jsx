import { ShoppingBag } from 'lucide-react'

import { NavLink } from 'react-router-dom'

function Logo() {
  return (
    <NavLink to={"/"} className="d-flex gap-2 align-items-center nav-link">
        <ShoppingBag color='#1447E6 ' size={24}/>
        <p className='m-0' style={{color: "#1447E6" , fontSize: "24px" , fontWeight: "700"}}>Marker Hub</p>
    </NavLink>
  )
}

export default Logo