import React from 'react'
import Logo from './Logo'
import { FacebookIcon, InstagramIcon, LinkedinIcon, Locate, LocateIcon, Mail, PhoneCall, Twitch, Twitter } from 'lucide-react'
import CustomNav from './CustomNav'

function Footer() {
  return (
    <div className='footer' style={{backgroundColor: "#101828"}}>

        <div className="container">
            <div className="row pt-3">
                <div className="col-12 col-lg-3">
                    <Logo />
                    <p className='text-white mt-3'>Your trusted destination for premium products at unbeatable prices. Quality guaranteed.</p>

                    <div className="icon-social d-flex gap-4">
                        <FacebookIcon color='white'/>
                        <Twitter color='white'/>
                        <InstagramIcon color='white'/>
                        <LinkedinIcon color='white'/>

                    </div>
                </div>


                <div className="col-12 col-lg-3">
                    <p className='text-white'>Quick Links</p>
                    <CustomNav classNameUl={"nav d-block"} slice1={0} slice2={4}/>
                </div>


                <div className="col-12 col-lg-3">
                    <p className='text-white'>Customer Service</p>
                    <CustomNav classNameUl={"nav d-block"} slice1={4} slice2={9}/>
                </div>


                <div className="col-12 col-lg-3">
                    <p className='text-white'>Contact Us</p>

                    <div className="icon-contact">
                        <p className='text-white d-flex gap-3'> <Locate size={30} color='#2A79F2'/> 123 Shopping Street New York, NY 10001</p>
                        <p className='text-white d-flex gap-3'> <PhoneCall size={30} color='#2A79F2'/> 123 Shopping Street New York, NY 10001</p>
                        <p className='text-white d-flex gap-3'> <Mail size={30} color='#2A79F2'/> 123 Shopping Street New York, NY 10001</p>
                    </div>
                </div>



            </div>   



            
        </div>


        <div className="copy-right" style={{borderTop : "1px solid"}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            <p className='text-white m-0'>© 2026 ShopHub. All rights reserved.</p>
                        </div>

                        <div className="col-12 col-lg-6">
                            <CustomNav classNameUl={"nav justify-content-end"} slice1={9} slice2={12}/>
                        </div>
                    </div>
                </div>
        </div>


    </div>
  )
}

export default Footer