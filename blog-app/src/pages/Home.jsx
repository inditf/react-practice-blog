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
                {/* <!-- 课程安排 --> */}
                <div className="courseSechdule">
                    <h2>课程安排</h2>
                    <div className="courseDiv">
                        <div className="course">
                            <img src={classImg} alt="第一课照片" />
                            <h3>第一课 这里是课程名字</h3>
                            <p> 这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,
                                这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,
                                这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介
                                这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介
                            </p>
                        </div>
                        <div className="course">
                            <img src={classImg} alt="第二课照片" />
                            <h3>第二课 这里是课程名字</h3>
                            <p> 这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,
                                这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,
                                这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介
                                这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介
                            </p>
                        </div>
                        <div className="course">
                            <img src={classImg} alt="第三课照片" />
                            <h3>第三课 这里是课程名字</h3>
                            <p> 这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,
                                这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,
                                这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介
                                这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介

                            </p>
                        </div>
                        <div className="course">
                            <img src={classImg} alt="第四课照片" />
                            <h3>第四课 这里是课程名字</h3>
                            <p> 这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,
                                这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,
                                这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介
                                这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介
                            </p>
                        </div>
                        <div className="course">
                            <img src={classImg} alt="第五课照片" />
                            <h3>第五课 这里是课程名字</h3>
                            <p> 这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,
                                这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,
                                这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介
                                这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介
                            </p>
                        </div>
                        <div className="course">
                            <img src={classImg} alt="第六课照片" />
                            <h3>第六课 这里是课程名字</h3>
                            <p>这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,
                                这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,
                                这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介
                                这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介,这里是课程简介
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
