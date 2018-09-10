import React from 'react'
import { Link  } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/logout'

function Header (props) {
  const navItemStyle = "navbar-item is-size-5 has-text-grey-light"
  return (
    <div>
      <nav className="navbar hero-header is-primary is-fixed-top has-shadow">

        <div className="navbar-brand">
          <Link className="navbar-start navbar-item is-size-4" to="/"><i className="fas fa-home"></i>&nbsp; Home</Link>
        </div>

        <div className="navbar-end">
          {props.auth.isAuthenticated && <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link is-size-4"><i className="fas fa-align-right"></i>&nbsp;Stories</a>
              <div className="navbar-dropdown is-right is-boxed">
                <Link className={navItemStyle} to="/stories"><i className="fas fa-book"></i>&nbsp; Start New Story</Link>
                <Link className={navItemStyle} to="/#"><i className="fas fa-book"></i>&nbsp; Saved Stories</Link>
              </div>
          </div>}

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link is-size-4"><i className="fas fa-align-right"></i>&nbsp;Users</a>

            {props.auth.isAuthenticated ?
              <div className="navbar-dropdown is-right is-boxed">
                <Link className={navItemStyle} to="/" onClick={() => props.dispatch(logoutUser())}><i className="fas fa-sign-out-alt"></i>&nbsp; LogOut</Link>
                <Link className={navItemStyle} to="/users"><i className="far fa-user"></i>&nbsp; Profiles</Link>
              </div>
              :
              <div className="navbar-dropdown is-right is-boxed">
                <Link className={navItemStyle} to="/signup"><i className="far fa-address-card"></i>&nbsp; Sign Up</Link>
                <Link className={navItemStyle} to="/login"><i className="fas fa-unlock-alt"></i>&nbsp; Login</Link>
              </div>
            }
          </div>
        </div>
      </nav>
    </div>
  )
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(Header)
