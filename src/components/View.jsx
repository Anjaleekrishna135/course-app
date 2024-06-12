import React, { useEffect, useState } from 'react'
import { NavBar } from './NavBar'
import axios from 'axios';

const View = () => {
    const [data, changeData] = useState([]);

    const fetchData = () => {
        axios.get("http://localhost:8083/view") 
            .then((response) => {
                changeData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <NavBar />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Course Title</th>
                        <th scope="col">Course Description</th>
                        <th scope="col">Course Date</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Venue</th>
                        <th scope="col">Trainer Name</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value, index) => (
                        <tr key={index}>
                            <td>{value.coursename}</td>
                            <td>{value.coursedescription}</td>
                            <td>{value.coursedate}</td>
                            <td>{value.duration}</td>
                            <td>{value.venue}</td>
                            <td>{value.trainername}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default View;