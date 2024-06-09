import React from 'react'
import Navbar from './Navbar'

const SearchNews = () => {
  return (
    <div>
        <Navbar/>
        <h1 align="center"><u>SEARCH LATEST NEWS</u></h1>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">News Id</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                               <button className="btn btn-success">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchNews