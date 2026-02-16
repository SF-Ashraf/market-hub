import React from 'react'
import conactData from '../contactData'
import { Send } from 'lucide-react'
function ContactPage() {
  return (
    <div className='contact'>

       <div className="content-contact my-5 pt-5 text-center">
         <h2 style={{fontSize: "48px" , fontWeight: '700' }}>Contact Us</h2>
        <p style={{fontSize: "18px" , fontWeight: "400"}}>We'd love to hear from you! Reach out through any of the methods below.</p>
       </div>


        <div className="container">
          <div className="row align-items-center">
            {conactData.map((item)=>{
              return(
                <div key={item.id} className="col-12 col-lg-4">
                  <div className="bg-white p-4 rounded shadow-lg d-flex align-items-center  gap-3">
                      <p>{item.icon}</p>
                    <div className="card-title">
                        <p className='text-black m-0' style={{fontSize:"16px" , fontWeight:"600"}}>{item.title}</p>
                        <p className='text-muted m-0' style={{fontSize: "16px" , fontWeight: "400"}}>{item.content}</p>

                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>


        <div className="container">
          <div className="p-4 col-12 col-lg-6  mx-auto mt-5 bg-white shadow rounded-4 mb-5">
            <p className='fw-medium'>Send a Message</p>
              <form action="" className='d-flex flex-column'>
                  <input required placeholder='Your Name' className='form-control mb-2 py-2'  type="text" name="" id="" />
                  <input required placeholder='Your Email' className='form-control mb-2 py-2' type="email" name="" id="" />
                  <textarea  required placeholder='Your Message' className='form-control mb-2'  name="" id="" style={{resize: "none" , height: "150px"}}></textarea>
              </form>
              <button className='btn btn-primary w-100 py-2' style={{fontSize: "16px" , fontWeight: "600"}}><Send /> Send Message</button>
          </div>
        </div>

    </div>
  )
}

export default ContactPage