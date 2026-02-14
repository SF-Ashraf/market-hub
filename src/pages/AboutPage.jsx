import { ShoppingBag } from 'lucide-react'


function AboutPage() {
  return (
    <div className='container'>
      <div className="about-shop mt-5">
        <p className='d-flex align-items-center justify-content-center rounded-5 text-center mx-auto ' style={{ fontWeight: "600", backgroundColor: "#DBEAFE" , color: "#155DFC" , padding: "5px" , width: "15%"}}><ShoppingBag color='#155DFC'/><span className='ms-1'>About ShopHub</span></p>
        <h2 className='text-center' style={{fontSize: "48px" , color: "#1E2939" , fontWeight: "700"}}>Your Trusted Shopping Destination</h2>
      </div>
    </div>
  )
}

export default AboutPage