import { Component } from "react";
import './Footer.css'
class Footer extends Component {
    render() {
        return (
            <div className="navbar  navbar-dark bg-pink rounded mt-2 shadow-sm">
                <div className="container-fluid d-flex">
                    <div className="text-white text-center">
                        aommie | {new Date().getFullYear()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;