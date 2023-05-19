import React from "react";
import Logo from "../images/logo.jpeg";

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
                        <li><a href="#" title="开发文档">开发文档</a></li>
                        <li><a href="#" title="交流中心">交流中心</a></li>
                        <li><a href="#" title="服务市场">服务市场</a></li>
                        <li><a href="#" title="开源联盟">开源联盟</a></li>
                        <li><a href="#" title="管理中心" className="manage">管理中心</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Navbar;
