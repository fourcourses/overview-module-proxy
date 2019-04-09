import React from 'React';


const Header = (props) => {
  return (
    <div className="headerDiv" onClick={(e) => props.handleModal(e)}>
      <div className="headerImg" id="0"></div>
        <div className="headerBookmark">
          <button id="bookmark" className="headerBookmarkButton">Save this restaurant</button>
        </div>
    </div> 
  )
}

export default Header;