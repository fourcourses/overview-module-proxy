import React from 'React';

const Tags = (props) => {
  return (
    <div>Top Tags:{props.tags.map(tag => {
      return <a className="tagButton" key={tag}>{tag}</a>})}
      </div>
  )
}

export default Tags;