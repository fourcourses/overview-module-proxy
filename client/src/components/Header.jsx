import React from 'React';

const Header = (props) => {
  //console.log('propsy', props.handleModal);
  return (
    <div className="headerDiv" onClick={(e) => props.handleModal(e)}>
      <div className="headerImg"></div>
        <div className="headerBookmark">
          <button id="bookmark" className="headerBookmarkButton">Bookmark</button>
        </div>
    </div> 
  )
}

export default Header;