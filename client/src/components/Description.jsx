import React from 'react';

const Description = (props) => {
  return (
    <div>
    <div className="box">
    <h1 className="name" id="overview">{props.restaurant.name}</h1>
    </div>
    <div className="ratings">Rating: {props.restaurant.rating}, {props.restaurant.reviews} Reviews, ${props.restaurant.priceRange.start}-${props.restaurant.priceRange.end}, {props.restaurant.type[0]}</div>
    <div className="tags">Tags: {props.restaurant.tags[0]}, {props.restaurant.tags[1]}
    </div>


    <div className="description" id="description">{props.restaurant.description}
    </div>
    </div>
  )
}

export default Description;