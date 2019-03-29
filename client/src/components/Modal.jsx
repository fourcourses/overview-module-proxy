import React from 'react';

const Modal = (props) => {
  console.log('images', props.state.images.length)
  return (
    <div id="myModal" className="modal">
    <span id="closeModal" className="close" onClick={(e) => {props.handleModal(e)}}>&times;</span>
    <span id="nextImage" className="close" onClick={(e) => {props.handleModal(e)}}>&gt;</span>
    <span id="previousImage" className="close" onClick={(e) => {props.handleModal(e)}}>&lt;</span>
    <img className="modal-content" src={props.state.images[props.state.currentImage]}></img>
    <div id="caption"></div>
  </div>
  )
}

export default Modal;