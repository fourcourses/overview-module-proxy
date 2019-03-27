import React from 'React';

const Header = (props) => {
  return (
  <div>
    <div className="headerDiv">
      <div className="headerImg"></div>
        <div className="headerBookmark">
          <button className="headerBookmarkButton">Bookmark</button>
        </div>
    </div>   
    <div className="overview-container">
      <div className="overview">
        <div className="menu">
          <nav>
            <a class="Nav-link" href="#overview"><span>Overview</span></a>
            <a class="Nav-link" href="#photos"> <span>Photos</span></a>
            <a class="Nav-link" href="#menu"> <span>Menu</span></a>
            <a class="Nav-link" href="#reviews"> <span>Reviews</span>
            </a>
          </nav>
        </div>
        <div className="name">RESTAURANT NAME</div>
        <div className="ratings">RATINGS *****, 5004820 Reviews, $2323-$238498, FRENCH</div>
        <div className="tags">TAGS</div>
        <div className="description">DESCRIPTION\

        <br></br>
        <img src="https://i.imgur.com/EkxXOVN.jpg"></img>
        
        </div>
        <div className="details">Details</div>
      </div>
    </div>

    <div className="footer">
    SUPPORT LINKS AND STUFF
    </div>
  </div>
  )
}

export default Header;