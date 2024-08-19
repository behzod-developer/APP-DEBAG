import React, { useEffect, useState } from 'react'
import './Category.css'
import axios from 'axios'
import { home } from '../../../Database/home'
import CategoryCard from './CategoryCard'

function Category() {

    const [landingCategory, setLandingCategory] = useState([])

    useEffect(() => {
        async function fetchCategory() {
            try {
                const res = await axios.get(`${home}`)
                setLandingCategory(res.data.categories)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchCategory()
    }, [])

    console.log(landingCategory)

    return (
        <div>
            <div className="category-parent">

                <div className="category-title">
                    <h3>Helping a local business reinvent itself</h3>
                    <span>We reached here with our hard work and dedication</span>
                </div>

                <div className="category-data">
                    {
                        landingCategory.map((item) => (
                            <CategoryCard item={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Category