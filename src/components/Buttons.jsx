import React from 'react'
import { useNavigate } from 'react-router-dom'

function Buttons({ styleBtn , path , valueBtn}) {
    const navigateDetails =  useNavigate()
  return (

    <button className={`${styleBtn}`} onClick={()=> navigateDetails({path})}>{valueBtn}</button>
  )
}

export default Buttons