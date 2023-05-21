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
                        <span>前端学习</span>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">课程安排</Link></li>
                        <li><Link to="/">博客文档</Link></li>
                        <li><Link to="/">博客编写</Link></li>
                        <li><Link to="/">博客技术</Link></li>
                        <li><Link className="manage" to="/login">管理中心</Link></li>
                    </ul>
                </nav>
            </div>
        </header >
    );
}
export default Navbar;
