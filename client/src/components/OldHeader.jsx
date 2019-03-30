import React from 'React';

const Header = (props) => {
  console.log('propsy', props.restaurant);
  return (
  <div>
    <div className="headerDiv">
      <div className="headerImg"></div>
        <div className="headerBookmark">
          <button className="headerBookmarkButton">Bookmark</button>
        </div>
    </div> 

    <div id="myModal" className="modal">
      <span className="close">hellooooo&times;</span>
      <img className="modal-content" id="https://i.imgur.com/EkxXOVN.jpg"></img>
      <div id="caption"></div>
    </div>



    <div className="overview-container">
      <div className="overview">

        <div className="menu">
          <nav>
            <a className="nav-link" href="#overview"><span>Overview</span></a>
            <a className="nav-link" href="#photos"> <span>Photos</span></a>
            <a className="nav-link" href="#menu"> <span>Menu</span></a>
            <a className="nav-link" href="#reviews"> <span>Reviews</span>
            </a>
          </nav>
        </div>

        <div className="name" id="overview">{props.restaurant.name}</div>
        <div className="ratings">Rating: {props.restaurant.rating}, {props.restaurant.reviews} Reviews, ${props.restaurant.priceRange.start}-${props.restaurant.priceRange.end}, {props.restaurant.type[0]}</div>
        <div className="tags">Tags: {props.restaurant.tags[0]}, {props.restaurant.tags[1]}
        </div>


        <div className="description" id="description">{props.restaurant.description}
        </div>

        <div className="photos" id="photos">PHOTOS

        <br></br>
        <img src="https://i.imgur.com/EkxXOVN.jpg" width="500"></img>
        </div>
        

        <div className="foodmenu" id="menu">Menu
        Category: Food<br></br>
        One Food<br></br>
        $30<br></br>
        </div>
  
        <div className="details" id="details">Details
        there is parking outside<br></br>
        is by the street<br></br>
        buy one get one full price<br></br>
        </div>

        <div className="reviews" id="reviews">Non Shill Comments
        hello<br></br>
        wow very good and cool food<br></br>
        this food was satisfying for my taste buds and it fulfills 1/3 of my daily calorie intake goals, yum!<br></br>
        </div>


      </div>
    </div>

    <div className="footer">
    SUPPORT LINKS AND STUFF
    </div>
  </div>
  )
}

export default Header;