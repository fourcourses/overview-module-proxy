import React from 'React';

const Navbar = () => {
  return (
    <div className="menu">
    <nav>
      <a className="nav-link" href="#overview"><span>Overview</span></a>
      <a className="nav-link" href="#photos"> <span>Photos</span></a>
      <a className="nav-link" href="#menu"> <span>Menu</span></a>
      <a className="nav-link" href="#reviews"> <span>Reviews</span>
      </a>
    </nav>
  </div>
  )
}


export default Navbar;