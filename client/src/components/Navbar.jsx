import React from 'React';
import $ from 'jquery';

$(document).ready(function(){
  console.log('ready')
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 48
      }, 400, function(){
      });
    }
  });
});

const Navbar = () => {
  return (
    <div className="menu">
    <nav>
      <a className="nav-link" href="#overview"><span>Overview</span></a>
      <a className="nav-link" href="#photos"> <span>Photos</span></a>
      <a className="nav-link" href="#menu"> <span>Menu</span></a>
      <a className="nav-link" href="#reviews"> <span>Reviews</span></a>
    </nav>
  </div>
  )
}


export default Navbar;