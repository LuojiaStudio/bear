/**
 * Created by Jsceoz on 2017/2/10.
 */
import React from 'react';

class RightsSection extends React.Component {
    render() {
        return (
            <section className="rights-section">
                <div className="section-middle-container">
                    <h2 className="section-headline">权益服务</h2>
                    <div className="rights-section-grid">
                        <div className="rights-item">
                            <div className="rights-item-logo">

                            </div>
                            <h4 className="rights-item-name">权益反馈</h4>
                            <span><a href="#">侵权投诉</a> | <a href="#">结果反馈</a></span>
                        </div>
                        <div className="rights-item">
                            <div className="rights-item-logo">

                            </div>
                            <h4 className="rights-item-name">失物招领</h4>
                            <span><a href="#">捡到东西</a> | <a href="#">丢了东西</a></span>
                        </div>
                        <div className="rights-item">
                            <div className="rights-item-logo">

                            </div>
                            <h4 className="rights-item-name">二手市场</h4>
                            <span><a href="#">出售物品</a> | <a href="#">随便看看</a></span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default RightsSection;