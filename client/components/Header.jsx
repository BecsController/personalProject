import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => {
  return (
<div>
<nav className="navbar hero-header is-primary is-fixed-top has-shadow">

    <div className="navbar-brand">
      <Link className="navbar-start navbar-item is-size-4" to={`/`}><i className="fas fa-home"></i>&nbsp; Home</Link>
    </div>

    <div className="navbar-end">
      <Link className="navbar-item is-size-4" to={`/stories`}><i className="fas fa-book"></i>&nbsp; Stories</Link>

      <div className="navbar-item has-dropdown is-hoverable">
         <a className="navbar-link is-size-4" href="#"><i className="fas fa-align-right"></i>&nbsp;Users</a>

      <div className="navbar-dropdown is-right is-boxed">
         <Link className="navbar-item is-size-5 has-text-grey-light" to={`/signup`}><i className="far fa-address-card"></i>&nbsp; Sign Up</Link>
         <Link className="navbar-item is-size-5 has-text-grey-light" to={`/users`}><i className="far fa-user"></i>&nbsp; Profiles</Link>
      </div>
      </div>
    </div>
</nav>
</div>
)
}

export default Header
