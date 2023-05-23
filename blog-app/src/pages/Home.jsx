import React from "react";
import thinking from "../images/thinking_img.png"
import practice from "../images/practice_img.png"
import conclude from "../images/conclude_img.png"
import share from "../images/share_img.png"
import classImg from "../images/class.jfif"
const Home = () => {
    return (
        <div className="Home">
            <div className="headerBottomDiv">
                <span><strong>这是一个前端博客</strong></span>
            </div>
            <div className="courseIntro">
                <div className="coursePurpose">
                    <h2> 我们的宗旨</h2>
                    <div className="purposeImg">
                        <div className="">
                            <h3>自律独立思考</h3>
                            <img src={thinking} title="自律独立思考" />
                        </div>
                        <div className="">
                            <h3>实践</h3>
                            <img src={practice} title="实践" />
                        </div>
                        <div className="">
                            <h3>总结回顾</h3>
                            <img src={conclude} title="总结回顾" />
                        </div>
                        <div className="">
                            <h3>分享交流</h3>
                            <img src={share} title="分享交流" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
