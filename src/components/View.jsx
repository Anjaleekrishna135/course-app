import React from 'react'
import { NavBar } from './NavBar'

const View = () => {
    return (
        <div>
            <NavBar />
            <table class="table">
                <thead>
                    <tr>

                        <th scope="col">course title</th>
                        <th scope="col">course description</th>
                        <th scope="col">date</th>
                        <th scope="col">duration</th>
                        <th scope="col">venue</th>
                        <th scope="col">trainer name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>SE</td>
                        <td>software engineering</td>
                        <td>2-4-24</td>
                        <td>5</td>
                        <td>Fisat</td>
                        <td>Rakhi</td>
                    </tr>
                    <tr>

                        <td>stati</td>
                        <td>applied statitics</td>
                        <td>4-4-24</td>
                        <td>6</td>
                        <td>fisat</td>
                        <td>rose</td>
                    </tr>
                    <tr>
                        <td>oops</td>
                        <td>java</td>
                        <td>6-4-24</td>
                        <td>6</td>
                        <td>fisat</td>
                        <td>manju</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default View