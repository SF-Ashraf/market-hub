import {  FacebookIcon,  InstagramIcon,  LinkedinIcon,   LocationEditIcon,   Mail,   Phone,   TwitterIcon } from 'lucide-react'
import Logo from "./Logo"
import { NavLink } from 'react-router-dom'
import Navbar from "./Navbar"
function Footer() {
  return (
    <div className='footer py-3' style={{backgroundColor: "#101828"}}>

        <div className="container text-white">
                <div className="row">
                    <div className="col-12 col-lg-3 h-100">
                        <div className="logo">
                            <Logo />
                        </div>

                        <div className="content">
                            <p>Your trusted destination for premium products at unbeatable prices. Quality guaranteed.</p>
                        </div>


                        <div className="icons-social d-flex align-items-center gap-3" >
                            <NavLink className={"nav-link fb rounded-5 d-flex justify-content-center align-items-center"} style={{width: "40px" , height: "40px" , backgroundColor: "#1E2939"}}><FacebookIcon /></NavLink>
                            <NavLink className={"nav-link tw rounded-5 d-flex justify-content-center align-items-center"} style={{width: "40px" , height: "40px" , backgroundColor: "#1E2939"}}><TwitterIcon /></NavLink>
                            <NavLink className={"nav-link in rounded-5 d-flex justify-content-center align-items-center"} style={{width: "40px" , height: "40px" , backgroundColor: "#1E2939"}}><InstagramIcon /></NavLink>
                            <NavLink className={"nav-link ln rounded-5 d-flex justify-content-center align-items-center"} style={{width: "40px" , height: "40px" , backgroundColor: "#1E2939"}}><LinkedinIcon /></NavLink>
                            
                        </div>
                    </div>

                    <div className="col-12 col-lg-3 h-100">
                        <p>Quick Links</p>
                        <nav>
                           
                                <Navbar start={0} end={4} decorationLi={"nav-item"} decorationUl={"nav d-block"}/>
                            
                        </nav>
                    </div>


                    <div className="col-12 col-lg-3">
                        <p>Customer Service</p>

                        <nav>
                            <Navbar start={4} end={9} decorationLi={"nav-item"} decorationUl={"nav d-block"}/>
                        </nav>
                    </div>


                    <div className="col-12 col-lg-3">
                        <p>Contact Us</p>

                        <div className="info ">
                            <div className='d-flex gap-3 w-75'><LocationEditIcon /><p>123 Shopping Street New York, NY 10001</p></div>
                            <div className='d-flex gap-3 w-75 mb-3'><Phone /><p>+1 (234) 567-890</p></div>
                            <div className='d-flex gap-3 w-75'><Mail />info@Markethub.com</div>
                        </div>
                    </div>


                </div>

        </div>



    </div>
  )
}

export default Footer