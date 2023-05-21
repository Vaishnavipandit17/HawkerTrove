import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { cliked: false };
  handleClick = () => {
    this.setState({ cliked: !this.state.cliked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">HawkerTrove</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.cliked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.cliked ? "nav-menu active" : "nav-menu "}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
