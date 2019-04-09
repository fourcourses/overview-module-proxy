import React from 'react';

const Reviews = (props) => {
  return (
    <div>
    <div className="box2">
    <div className="photos" id="reviews">What {props.restaurant.reviews} People Are Saying</div>
    </div>
</div>
  )
}

export default Reviews;