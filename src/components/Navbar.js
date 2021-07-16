import { Link, StaticRouter } from "react-router-dom";
import { connect } from "react-redux";
import Search from "./Search";
const Navbar = (props) => {

  return (
    <nav className="nav-wrapper">
      <div className="container">

        <Link to="/" className="brand-logo">
          Shopping
        </Link>

        <ul className="right">
          <li>
            <Search />
          </li>
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/cart">My cart {props.total_qty}</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    addedItems: state,
    total: state.cartReducer.total,
    total_qty: state.cartReducer.total_qty,
  };
};

export default connect(mapStateToProps)(Navbar);
