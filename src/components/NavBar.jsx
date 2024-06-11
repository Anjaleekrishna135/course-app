import React from 'react'

export const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">course</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="AddCourse.jsx">add</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="Search.jsx">search</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="View.jsx">view</a>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
