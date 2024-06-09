import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Viewall = () => {
    const [data, changeData] = useState({"articles": [ ]})
    const fetchData=()=>{
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=9b6ac262eea44bcbbf80ae1b064f631d").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
useEffect(()=>{fetchData()},[])

    return (
        <div>
            <Navbar/>
            <h1 align="center"><u>LIVE NEWS</u></h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row g-3">
                               {data.articles.map(
                                (value,index)=>{
                                    return <div className="col col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                    <div className="card" >
                                        <img height="200px" src={value.urlToImage} class="card-img-top" alt="..."></img>
                                       
                                            <div class="card-body">
                                                <h5 class="card-title">{value.author}</h5>
                                                <p class="card-text">{value.title}</p>
                                                <p class="card-text">{value.description}</p>
                                                
                                            </div>
                                    </div>
                                </div>
                                }
                               )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall