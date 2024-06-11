import React, { useState } from 'react';
import { NavBar } from './NavBar';
import axios from 'axios';

const AddCourse = () => {
    const [data, setData] = useState({
        coursename: "",
        coursedescription: "",
        coursedate: "",
        duration: "",
        venue: "",
        trainername: ""
    });

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = () => {
        console.log(data);
        axios.post("http://localhost:8054/add", data)
            .then((response) => {
                console.log(response.data);
                if (response.data.status === "success") {
                    alert("Successfully Added");
                } else {
                    alert("Error");
                }
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">coursename</label>
                                <input type="text" className="form-control" name='coursname' value={data.coursetitle} onChange={inputHandler} />
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