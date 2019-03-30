import React from 'React';
import Header from './Header.jsx';
import Modal from './Modal.jsx';
import Navbar from './Navbar.jsx';
import Description from './Description.jsx';
import Footer from './Footer.jsx';

import $ from 'jquery';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      restaurant: null,
      currentImage: 2,
      restaurantId: 1,
      images: ['https://i.imgur.com/i2FffSR.jpg', 'https://i.imgur.com/rd9yHKH.jpg', 'https://i.imgur.com/ocPGEcz.jpg', 'https://i.imgur.com/noBxGLl.jpg', 'https://i.imgur.com/yajIWRO.jpg']
    }
    this.handleModal = this.handleModal.bind(this)
  }

  componentDidMount(){
    this.getData()
  }

  getData() {
    $.ajax({
      url: `/restaurant?restaurant=${this.state.restaurantId}`,
      method: 'GET',
      dataType: 'json',
      success: (data) => {
      console.log('success', data)
      this.setState({
        restaurant: data[0]
      })
    },
      error: () => {console.log('error')}
    })    
  }

  handleModal(e) {
    console.log('Clicked', e.target.id)
    if(e.target.id !== "bookmark"){
    document.getElementById('myModal').style.display = "block";
    this.setState({
      currentImage: 0
    })
    }
    if (e.target.id === "closeModal"){
      document.getElementById('myModal').style.display = "none";
    }
    if (e.target.id === "previousImage"){
      console.log('Previous')
      if (this.state.currentImage === 0){
        this.setState({
          currentImage: this.state.images.length - 1
        })  
      } else {      
        this.setState({
        currentImage: this.state.currentImage - 1
      })}
    }
    if (e.target.id === "nextImage"){
      console.log('Next')
      console.log(this.state.currentImage, this.state.images.length - 1)
      if (this.state.currentImage === this.state.images.length - 1){
        this.setState({
          currentImage: 0
        })
      } else {
      this.setState({
        currentImage: this.state.currentImage + 1
      })}
    }
  }

  render() {
    return (
      <div>
      {this.state.restaurant !== null ? 
      <div>
        <Header handleModal={this.handleModal} />
        <Modal handleModal={this.handleModal} state={this.state}/>
        <div className="overview-container">
          <div className="overview">
            <Navbar />
            <Description restaurant={this.state.restaurant}/>
          </div>
        </div>
        <Footer />
      </div>
      : null }
      </div>
    )
  }
}

$(document).ready(function(){
  console.log('test');
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 45
      }, 400, function(){
      });
    }
  });
});

export default App;