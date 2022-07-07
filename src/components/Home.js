import React from 'react'
import{useNavigate} from "react-router-dom"

export default function Home() {

const navigate=useNavigate()

  return (
    <div className='home'>
      <h2>Welcome To the Best Note-App</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Lorem ipsum dolor sit amet, consectetur adipisce placerat mauris nisl. Proin vitae urna eu sem pellentesque laoreet. </p>
      <img src="./images/home.png" alt='home'/>
      <button onClick={()=>navigate("notes")}>Go to Notes</button>
    </div>
  )
}
