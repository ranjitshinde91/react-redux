import React from 'react'
import {Link} from 'react-router-dom'

export const Header = (props) => {
    return(
      <nav className="nav">
        <Link className="nav-link active" to="/">Home</Link>
        <Link className="nav-link active" to="/user">User</Link>
      </nav>
    );
}
