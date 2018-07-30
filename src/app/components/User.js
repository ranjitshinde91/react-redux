import React from 'react'

export const User = (props) =>{
  return(
    <div>
      <p>I am User {props.name}</p>
      <button onClick={props.onButtonClick}>Change</button>
    </div>
  );
}
