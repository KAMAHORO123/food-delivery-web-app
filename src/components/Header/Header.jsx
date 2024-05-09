import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Welcome to our online ordering platform! Explore our diverse menu and
          order your favorite dishes conveniently from the comfort of your home.
          Whether you're craving savory delights, indulgent desserts, or
          refreshing beverages, we've got something to satisfy every palate.
          Enjoy hassle-free ordering and prompt delivery, and treat yourself to
          a culinary experience like no other. Bon appétit!
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
