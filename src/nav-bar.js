function Nav_bar() {
    return (
      <div className="nav_bar">
        <div className="logo">
            Ecommerce
        </div>
        <div className="nav_content">
          <ul>
              <li>Home</li>
              <li>Men</li>
              <li>Women</li>
              <li>Explore All</li>
            </ul>
        </div>
        <div className="cart">
          <img src="cart.jpg" alt="Loading" align="right"></img>
        </div>
      </div>
    );
  }
  
  export default Nav_bar;
  