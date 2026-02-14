
import { NavLink } from 'react-router-dom'
import listItems from '../listItems'

function CustomNav({ classNameUl , slice1 , slice2}) {
  return (
    <nav>
        <ul className={classNameUl}>
            {listItems.slice(slice1 , slice2).map((item) =>{
                return(
                    <li key={item.id} className='nav-item'><NavLink to={item.path} className="nav-link">{item.title}</NavLink></li>
                )
            })}
        </ul>
    </nav>
  )
}

export default CustomNav