import React from 'react'
import useFetchedProducts from './useFetchedProducts'
import { Star } from 'lucide-react'
import Buttons from './Buttons'
import LoadingPage from './LoadingPage'

function CardProducts({num1 , num2}) {
  const   {fetchedProducts , isLoading , isError} = useFetchedProducts()
    
  return (
    <section>
        <div className="row g-5">
           {
            !isLoading &&
            fetchedProducts.slice(num1 , num2).map((pro) =>{
                const rating = pro.rating.rate
                const ratePro = Math.floor(rating)
                return(
                    <div key={pro.id} className="col-12 col-lg-3 shadow-sm">
                        <div className="card h-100">
                            <img className='img-fluid bg-body-tertiary mx-auto' style={{width: "250px" , height: "250px" , objectFit: "contain"}} src={pro.image} alt="" />
                            <div className="card-title rounded-3 bg-white shdow-lg p-2">
                                <p className='text-black'>{pro.description.slice(0 , 20)}......</p>
                                {[...Array(ratePro)].map((pr) => {
                                    return(
                                    <span><Star key={pr} size={20} color='gold'  fill='gold'/></span>
                                    )
                                })}

                                {[...Array(5 - ratePro)].map((pr) =>{
                                    return(
                                        <span><Star key={pr} size={20} /> </span>
                                    )
                                })}

                                <div className="group-pro d-flex justify-content-between align-items-center">
                                    <p className='text-primary'>$ {pro.price}</p>
                                    <Buttons valueBtn={"view"} styleBtn={"btn btn-primary"} path={"/product-details/:id"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
           }


           {
            isLoading && 
            <LoadingPage />
           }
        </div>
    </section>
  )
}

export default CardProducts