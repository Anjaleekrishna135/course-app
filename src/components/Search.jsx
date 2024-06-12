import React, { useState } from 'react'
import { NavBar } from './NavBar'
import axios from 'axios'

const Search = () => {
    const [data, setData] = useState(
        {
            "coursename": " ",
        }

    )
    const [result, setResult] = useState(
        []
    )

    // delete event handling
    const deleteCourse = (id) => {
        let input = { "_id": id }
        axios.post("http://localhost:8083/delete",input).then(
            (response)=>{
                if (response.data.status==="success") {
                    alert("successfully deleted");
                    
                } else {
                    alert("error in deletion");
                    
                }
            }
        ).catch().finally()
    }

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    // Search button event
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8083/search", data).then((response) => {
            setResult(response.data)
        }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.map)
            }
        ).finally()


    }

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">coursename</label>
                                <input type="text" className="form-control" name='coursename' value={data.coursetitle} onChange={inputHandler} />
                            </div>
                            <center>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <button className="btn btn-success" onClick={readValue}>search</button>
                                </div>
                            </center>
                            <div className="container">
                                <div className="row">
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">coursename</th>
                                                    <th scope="col">coursedescription</th>
                                                    <th scope="col">coursedate</th>
                                                    <th scope="col">duration</th>
                                                    <th scope="col">venue</th>
                                                    <th scope="col">trainername</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    result.map((value, index) => {
                                                        return <tr>
                                                            <td>{value.coursename}</td>
                                                            <td>{value.coursedescription}</td>
                                                            <td>{value.coursedate}</td>
                                                            <td>{value.duration}</td>
                                                            <td>{value.venue}</td>
                                                            <td>{value.trainername}</td>

                                                            <td><button className="btn btn-danger" onClick={()=>deleteCourse(value._id)}>delete</button></td>
                                                        </tr>

                                                    })
                                                }


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search