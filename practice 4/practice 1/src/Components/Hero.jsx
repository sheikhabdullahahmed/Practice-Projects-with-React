import axios from "axios"
import { useEffect, useState } from "react"

function Hero() {
    const [data, setData] = useState()


    const myFun = async () =>{
      if(search == ""){
          setMsg("Please Enter Something")
      }else{
          const get = await fetch(`www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`);
          const jsonData = await get.json();
      console.log(jsonData.meals);
      setData(jsonData.meals)
      setMsg("")
      
      }
       
  }

    
     
   
  return (
    <div className='container'>
        <div className='searchBar' >
            <input type="text" placeholder='Enter Dishe ' name="" id="" />
            <button onClick={myFun}>Search</button>
        </div>
    </div>
  )
}

export default Hero