import React, {Component} from 'react';

class BackgroundSummary extends Component {

  render(){
    return(
        <div className= 'summary-content'>
          <h1>The best Burger on Strip!</h1>
          <p>Our burgers require two hands,
              piled high and grilled to perfection. Sip
              on craft cocktails and boozy milkshakes and snack on
              fresh-cut fries and hand-cut onion strings at the Strip’s
              only all-outdoor restaurant. Come for lunch, dinner, happy
               hour or a late-night bite – burgers, shakes and cocktails
               are available all day long. </p>

          <button className='btn-view-menu'>View the Menu</button>
        </div>

    );
  }
}


export default BackgroundSummary;
