import React from 'react';


class Header extends React.Component {
  constructor(props){
    super(props);
      this.handleModal = this.handleModal.bind(this)
    }
    
    handleModal(e) {
      if(e.target.id !== "bookmark" && document.getElementById('myModal') !== null){
      document.getElementById('myModal').style.display = "block";
      this.setState({
        currentImage: parseInt(e.target.id)
      })
      }
      if (e.target.id === "closeModal" && document.getElementById('closeModal') !== null){
        document.getElementById('myModal').style.display = "none";
        this.setState({
          currentImage: 0
        })
      }
      if (e.target.id === "previousImage" && document.getElementById('previousImage') !== null){
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

  render () {
  return (
    <div>
      <div className="search">
  <img src="./images/topnavbar.png" width="100%"/>
</div>
    <div className="headerDiv" onClick={(e) => this.handleModal(e)}>
      <div className="headerImg" id="0"></div>
        <div className="headerBookmark">
          <button id="bookmark" className="headerBookmarkButton">Save this restaurant</button>
        </div>
    </div> 
    </div>
  )
  }
}

export default Header;