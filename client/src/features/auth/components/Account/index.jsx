import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../../flux/actions/authAction";

import "./Account.scss";

function Account(props) {
  const dispatch = useDispatch();
  const { isAdmin } = props;

  const handleLogout = () => {
    console.log("logout");
    dispatch(logout());
  };

  return (
    <section className="account">
      <div className="account-button">
        <span>
          <img src="#" alt="account" />
        </span>
      </div>
      <div className="account__viewport">
        <div className="account__actions">
          <ul>
            <li onClick={handleLogout}>
              <a href="#">Profile</a> 
              {/* use Link  */}
            </li>
            <li onClick={handleLogout}>
              <a href="#">{isAdmin ? "Orders" : "Wishlist"}</a>
            </li>
            <li onClick={handleLogout}>
              <a href="#">{isAdmin ? "Users" : "History"}</a>
            </li>
            <li onClick={handleLogout}>
              <a href="#">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Account;
