import React, { Component } from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Notice from './components/Notice';
import NewsSection from './components/NewsSection';
import RightsSection from './components/RightsSection';
import AboutSection from './components/AboutSection';
import JoinSection from './components/JoinSection';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <Carousel/>
       <Notice/>
       <NewsSection/>
       <RightsSection/>
       <AboutSection/>
       <JoinSection/>
       <Footer/>
      </div>
    );
  }
}

export default App;
