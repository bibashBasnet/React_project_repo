import "./nav-bar.css"

function Nav_bar() {
    return (
      <div className="nav_bar">
        <div className="logo">
            Ecommerce
        </div>
        <div className="nav_content">
          <ul>
              <li id="nav_item">Home</li>
              <li id="nav_item">Men</li>
              <li id="nav_item">Women</li>
              <li id="nav_item">Explore All</li>
            </ul>
        </div>
        <div className="cart">
          <img src="cart.jpg" alt="Loading" align="right"></img>
        </div>
      </div>
    );
  }
  
  export default Nav_bar;
  