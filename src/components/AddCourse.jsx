import React, { useState } from 'react'
import { NavBar } from './NavBar'

const AddCourse = () => {
    const [data, setData] = useState(
        {
            "coursetitle": " ",
            "coursedescription": " ",
            "coursedate": " ",
            "duration": " ",
            "venue": " ",
            "trainername": " "


        }

    )
    const inputHandler =(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue =()=>{
        console.log(data)
    }
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">coursetitle</label>
                                <input type="text" className="form-control" name='coursetitle' value={data.coursetitle} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">coursedescription</label>
                                <input type="text" className="form-control" name='coursedescription' value={data.coursedescription} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">coursedate</label>
                                <input type="date" name="" id="" className="form-control" name='coursedate' value={data.coursedate} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">duration</label>
                                <input type="text" className="form-control" name='duration' value={data.duration} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">venue</label>
                                <input type="text" className="form-control" name='venue' value={data.venue} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">trainername</label>
                                <input type="text" className="form-control" name='trainername' value={data.trainername} onChange={inputHandler} />
                            </div>
                            <center>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <button className="btn btn-success" onClick={readValue}>submit</button>
                                </div>
                            </center>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCourse