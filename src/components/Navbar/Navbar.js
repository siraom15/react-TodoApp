import { Component } from "react";
import './Navbar.css'
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-pink rounded mt-2 shadow-sm">
                <div className="container-fluid">
                    <a className="navbar-brand text-bold" href="#">Todo App</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li> */}
                        </ul>

                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;