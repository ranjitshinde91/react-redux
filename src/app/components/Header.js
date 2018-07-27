import React from 'react'


export class Header extends React.Component{
  render(){
    return(
      <nav className="nav">
        <a className="nav-link active" href="#">Home</a>
        <a className="nav-link" href="#">About Us</a>
        <a className="nav-link" href="#">Contact</a>
      </nav>
    )

  }
}
