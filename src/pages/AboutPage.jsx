import React from "react";
import statistic from "../statistic";
import { ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
function AboutPage() {
  const navigateBrwose = useNavigate()
  return (
    <div className="about">
      <div className="content-about-header text-center my-5">
        <span
          className="my-2 d-inline-flex rounded-5 align-items-center gap-2 px-3 py-2 fw-medium"
          style={{ backgroundColor: "#DBEAFE", color: "#1447E6" }}
        >
          <ShoppingBag /> About ShopHub{" "}
        </span>

        <h2 style={{fontSize: "48px" , fontWeight: '700' , color: "#1E2939"}}>Your Trusted Shopping Destination</h2>
        <p style={{fontSize: '18px' , fontWeight: "400" , color: "#1e2939da"}}>ShopHub is your one-stop shop for premium products at unbeatable prices. We're committed to <br/> providing quality products and exceptional customer service.</p>
      </div>

      <div className="container">
        <div className="row">
          {statistic.slice(0, 4).map((st) => {
            return (
              <div key={st.id} className="col-12 col-lg-3 text-center">
                <div className="card py-3 rounded-4 shadow">
                  <p className=" mx-auto d-flex justify-content-center align-items-center rounded-5" style={{width: "50px" , height: '50px'}}>{st.icon}</p>
                  <div className="card-item">
                    <h2>{st.title}</h2>
                    <p>{st.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>



      <div className="container">
        <div className="why-choose text-center my-5">
          <h2>Why Choose ShopHub?</h2>
        </div>


        <div className="row">
          {statistic.slice(4,8).map((stc)=>{
            return(
              <div key={stc.id} className="col-12 text-center col-lg-4 h-100 ">
                <div className="card p-3 mb-5">
                    <p>{stc.icon}</p>
                  <div className="card-title">
                      <h2>{stc.title}</h2>
                      <p>{stc.content}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>


      <div className="container browse-product rounded-5">
          <div className="col-12 text-white text-center p-5 mb-5 " style={{height: "280px"}}>
            <h2 className="p-2" style={{fontSize: "36px" , fontWeight: "700"}}>Ready to Start Shopping?</h2>
            <p className="p-2" style={{fontSize: '18px'}}>Explore our wide range of products and find exactly what you're looking for.</p>
            <button className="btn btn-light px-4 py-3 text-primary fw-medium" style={{fontSize:"18px" , fontWeight: "600"}} onClick={()=> navigateBrwose("/products")}>Browse Products</button>
          </div>
      </div>
    </div>
  );
}

export default AboutPage;
