import React, {Component} from 'react';

class Content extends Component {
  render(){
    return(
      <div className='content-details'>
        <div className= 'details'>

          <div className='details-row'>
            <div className='summary'>
              <h1>Stripburger Happy Hour</h1>
              <p>Daily from 4pm-7pm and 10pm-close </p>
              <p>Located at Fashion Show Mall across from the Wynn, take a front row seat at our bar and enjoy food and drink specials during Happy Hour! </p>
              <p>Don’t miss $3-4 Beers, $4 well drinks, $2.50 mini burgers, $5 nachos, $6 wings and more, available in the bar area.</p>
              <button className = 'btn-view-menu'> View Menu </button>
            </div>
          </div>

          <div className = 'item-list'>
            <div className = 'item-1'>
              <h1>Burger</h1>
              <p> The juiciest bite on the Strip! Each is made with 100% all-natural selected cuts, specially chosen for flavor,
                  juiciness and leanness. It’s time you get your hands on our buns. </p>
            </div>
            </div>

              <div className = 'item-list-2'>
                <div className = 'item-2'>
                  <h1>Side Action</h1>
                  <p> Our fresh-cut fries and onion strings make you second guess sharing. Complement your burger with an order of
                      Sweet Potato Fries, Guacamole and Tortilla Chips or Atomic Cheese Fries. </p>
                </div>
              </div>

        </div>
      </div>
    );
  }
}

export default Content;
