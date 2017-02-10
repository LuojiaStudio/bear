/**
 * Created by Jsceoz on 2017/2/10.
 */
import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header-middle-container">
                    <div className="header-title">
                        <img src="http://whusu.oss-cn-qingdao.aliyuncs.com/static/logo1.png" alt="武汉大学学生会" width={300}/>
                    </div>
                    <nav className="header-nav-wrapper">
                        <a href="#" className="header-nav-item">新闻</a>
                        <a href="#" className="header-nav-item">权益</a>
                        <a href="#" className="header-nav-item">活动</a>
                        <a href="#" className="header-nav-item">我们</a>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;