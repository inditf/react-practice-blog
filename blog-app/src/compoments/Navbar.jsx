import React from "react";
import Logo from "../images/logo.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="Navbar">
            <div className="headerTopDiv">
                <div className="headerTitle">
                    <img className="logo" src={Logo} alt="logo" />
                    <div className="spanTitle">
                        <span>前端博客</span>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">博客介绍</Link></li>
                        <li><Link to="/menu">博客列表</Link></li>
                        {/* <li><Link to="/write">博客编写</Link></li> */}
                        <li><Link className="manage" to="/login">管理中心</Link></li>
                    </ul>
                </nav>
            </div>
        </header >
    );
}
export default Navbar;
