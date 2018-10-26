import React, {Component} from 'react';
import Slider from "react-slick";
import burger1 from '../images/burger1.jpg';
import burger2 from '../images/burger2.jpg';
import burger3 from '../images/burger3.jpg';
import burger4 from '../images/burger4.jpg';
import burger5 from '../images/burger5.jpg';
import burger6 from '../images/burger6.jpg';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../App.css';

import model from '../model/PageModel';

class BackgroundSlider extends Component {

  constructor(props){
    super(props);
    this.state = {
       images: []
    }
  }

  componentWillMount(){
    this.setState({images: model.images});
    console.log({burger4});
  }

  render(){

    const settings = {
     dots: false,
     infinite: true,
     speed: 200,
     fade: true,
     arrow: false,
     lazyload: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     adaptiveHeight: true
   };

    const images = this.state.images.map((image, key) =>(
        <div className="mySlides" key= {key}>
            <img src={image} alt= 'image slide' style={{width: '100%'}}/>
        </div>
    ));
    return(
        <Slider {...settings}>
        <div className="mySlides">
            <img src={this.state.images[0]} alt= 'image slide' style={{width: '100%'}}/>
        </div>

        <div className="mySlides">
            <img src={this.state.images[1]} alt= 'image slide' style={{width: '100%'}}/>
        </div>
        <div className="mySlides">
            <img src={this.state.images[2]} alt= 'image slide' style={{width: '100%'}}/>
        </div>
        <div className="mySlides">
            <img src={this.state.images[3]} alt= 'image slide' style={{width: '100%'}}/>
        </div>
        </Slider>
    );
  }
}


export default BackgroundSlider;
