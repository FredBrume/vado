import React, { Component } from 'react';
import Menu from '../src/component/Menu';
import Content from '../src/component/Content';
import BackgroundSlider from '../src/component/BackgroundSlider';
import BackgroundSummary from '../src/component/BackgroundSummary';


class App extends Component {
  render() {
    return (
    <div className='main-container'>
      <Menu/>
      <div className = 'content'>
        <div className= 'banner-container'>
            <BackgroundSlider/>
        </div>

        <div className='summary-container'>
            <BackgroundSummary/>
        </div>

        <div className= 'main-content'>
          <Content/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
