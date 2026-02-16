
import { NavLink } from 'react-router-dom'
import listItems from '../listItems'
function Navbar({start , end , decorationLi , decorationUl}) {
  return (
    <nav>
        <ul className={`${decorationUl}`}>
            {listItems.slice(start ,end).map((item)=>{
                return(
                    <li className={decorationLi}><NavLink className="nav-link" to={`${item.path}`}>{item.title}</NavLink></li>
                )
            })}
           
        </ul>
    </nav>
  )
}

export default Navbar