import React from 'react'
import CardProducts from '../components/CardProducts'
import ContactPage from "./ContactPage"
function HomePage() {
  return (
    <div className='container'>
        <CardProducts num1={0} num2={8} />
        

        <div className="contact-pag">
          <ContactPage />
        </div>
    </div>
  )
}

export default HomePage