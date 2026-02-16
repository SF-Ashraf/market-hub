
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MainLayout() {
  return (
    <div className='layout' style={{display: 'flex' , flexDirection: "column" , height: "100vh"}}>  
      <Header />
    <main className="main" style={{flex : '1'}}>
      <Outlet />
    </main>

    <Footer />
      

    </div>
  )
}

export default MainLayout