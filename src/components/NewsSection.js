/**
 * Created by Jsceoz on 2017/2/10.
 */
import React from 'react';
import NewsCard from './NewsCard';
import Notice from './Notice';

class NewsSection extends React.Component {
    render() {
        return (
            <section className="news-section">
                <div className="section-middle-container">
                    <h2 className="section-headline">新闻动态</h2>
                    <div className="news-section-grid">
                        <NewsCard/>
                        <NewsCard/>
                        <NewsCard/>
                        <NewsCard/>
                    </div>
                </div>
            </section>
        )
    }
}

export default NewsSection;
