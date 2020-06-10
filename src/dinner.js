import React from 'react';

function Dinner (props){
  return(
  <div>
    <h1>We have {props.dishName} to serve you</h1>
  <h1>We also offer {props.sweetDish}</h1>
  </div> 
  );

}

export default Dinner;