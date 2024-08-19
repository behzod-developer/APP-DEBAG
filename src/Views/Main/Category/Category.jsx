import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Category() {

    const [landingCategory, setLandingCategory] = useState([])

    useEffect(()=>{
        async function fetchCategory(){
            try{
                const res = await axios.get(`http://ss.norqulov.uz/home/`)
                setLandingCategory(res)
            }
            catch(err){
                console.log(err)
            }
        }
        fetchCategory()
    },[])

    console.log(landingCategory)

  return (
    <div>
        <h2>Category</h2>
        <div className="category-container">

        </div>
    </div>
  )
}

export default Category