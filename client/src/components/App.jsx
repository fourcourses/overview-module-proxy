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
      currentImage: 0,
      restaurantId: 1,
      images: null
    }
    this.handleModal = this.handleModal.bind(this)
  }

  componentDidMount(){
    this.getData()
  }
  

  getData() {
    return $.ajax({
      url: `/restaurant?restaurant=${this.state.restaurantId}`,
      method: 'GET',
      dataType: 'json',
      success: (data) => {
        console.log('success', data)
        this.setState({
          restaurant: data[0],
          images: data[0].imageUrl
        })
        $('.headerImg').css('background', `url(${data[0].imageUrl[0]}) center center`)
      },
      error: () => {console.log('error')}
    })    
  }

  handleModal(e) {
    console.log('Clicked', e.target.id)
    if(e.target.id !== "bookmark" && document.getElementById('myModal') !== null){
    document.getElementById('myModal').style.display = "block";
    this.setState({
      currentImage: 0
    })
    }
    if (e.target.id === "closeModal" && document.getElementById('closeModal') !== null){
      document.getElementById('myModal').style.display = "none";
    }
    if (e.target.id === "previousImage" && document.getElementById('previousImage') !== null){
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
    if (e.target.id === "nextImage" && document.getElementById('nextImage') !== null){
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

export default App;
