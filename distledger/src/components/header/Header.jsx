import "./header.scss"
import cargoVid from "../../images/cargo-ship-footage.mp4"
import { Link } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Header() {
    return (
        <div className="header">
            <video className="vidTag" autoPlay loop muted>
                <source src={cargoVid} type="video/mp4" />
            </video> 

            <header className="viewport-header">
                <div className="container">
                    <h1>Transaxn</h1>
                    <h3> » designed by the 2022 Convergent E-Comm Supply Chain BT</h3>
                    <h3> » redefining how small businesses track transactions between suppliers and shippers</h3>
                    <div className="SignUp">
                        <Link to='/TransactionPage'>
                        <button>Log In</button>
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    )
}