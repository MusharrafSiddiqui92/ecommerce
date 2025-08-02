import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{ borderBottom: 'grey dotted' }}>
                <div className="container d-flex justify-content-lg-between ">
                    <a className="navbar-brand" href="#">
                        <img src="/images/logo2.png" className='image-fluid rounded-circle' style={{ width: '75px', height: '75px' }} alt="logo" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse w-50 flex-grow-0" id="navbarNavDropdown">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" href="#">
                                        Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a onClick={()=> navigate('/men')} className="nav-link" href="#">
                                    Men's
                                </a>
                            </li>
                            <li className="nav-item">
                                <a onClick={()=> navigate("/women")} className="nav-link" href="#">
                                    Women's
                                </a>
                            </li>
                            <li className="nav-item">
                                <a onClick={()=> navigate("/kids")} className="nav-link" href="#">
                                    Kid's
                                </a>
                            </li>

                            {/* <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Pages
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Features
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link" href="https://wa.me/923463825908" target='_blank'>
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Navbar
