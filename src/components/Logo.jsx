import { ShoppingBag } from 'lucide-react'
import { NavLink } from 'react-router-dom'

function Logo() {
  return (
    <NavLink to={"/"} className={`d-flex align-items-center nav-link`}>
        <ShoppingBag size={34} color='#1447E6'/>
        <h1 className='m-0 fs-3' style={{color: "#1447E6"}}>Market-hub</h1>
    </NavLink>
  )
}

export default Logo