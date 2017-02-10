/**
 * Created by Jsceoz on 2017/2/10.
 */
import React from 'react';

class AboutSection extends React.Component {
    render() {
        return (
            <section className="about-section">
                <div className="section-middle-container">
                    <div className="about-section-grid video-container">
                    <div className="about-vidoe-wrapper">
                        <video  className="about-video" src="http://whusu.oss-cn-qingdao.aliyuncs.com/static/video/Walking-By.mp4" controls="controls"></video>
                    </div>
                        <h2 className="about-video-name">《重新开始》<span>2017宣传片</span></h2>
                    </div>
                    <div className="de-detail-wrapper">

                    </div>
                    <div className="about-section-grid">
                        <div className="btn-wrapper">
                            <i className="fa fa-chevron-left" aria-hidden="true"></i>
                        </div>
                        <div className="de-list-visio">
                            <div className="de-list">
                                <a href="#" className="de-list-item">
                                    <div className="de-logo">

                                    </div>
                                    <h3 className="de-name">主席团</h3>
                                </a>
                                <a href="#" className="de-list-item">
                                    <div className="de-logo">

                                    </div>
                                    <h3 className="de-name">新闻宣传部</h3>
                                </a>
                                <a href="#" className="de-list-item">
                                    <div className="de-logo">

                                    </div>
                                    <h3 className="de-name">外联部</h3>
                                </a>
                                <a href="#" className="de-list-item">
                                    <div className="de-logo">

                                    </div>
                                    <h3 className="de-name">权益部</h3>
                                </a>
                            </div>
                        </div>
                        <div className="btn-wrapper">
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutSection;