/**
 * Created by Jsceoz on 2017/2/8.
 */
import React from 'react';

class NewsCard extends React.Component {
    render() {
        return (
            <div className="news-card">
                <div className="news-card-media"></div>
                <h2 className="news-card-title">新闻标题新闻标题</h2>
                <h4 className="news-card-subtitle">——副标题副标题</h4>
                <h6 className="news-card-date"><i className="fa fa-calendar"></i> 12月21日</h6>
            </div>
        )
    }
}

export default NewsCard;