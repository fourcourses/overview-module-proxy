import React from 'react';

const Modal = (props) => {
  return (
    <div id="myModal" className="modal">
    <div className="gridContainer">
    <span id="previousImage" unselectable="on" className="arrow gridItem" onClick={(e) => {props.handleModal(e)}}>&lt;</span>
    <span className="gridItem"><img className="modal-content" src={props.state.images[props.state.currentImage].imageUrl}></img></span>
    <span id="nextImage" unselectable="on" className="arrow gridItem" onClick={(e) => {props.handleModal(e)}}>&gt;</span>
    <span id="closeModal" unselectable="on" className="close gridItem" onClick={(e) => {props.handleModal(e)}}>&times;</span>
    <div id="caption"></div>
    </div>
  </div>
  )
}

export default Modal;