import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" className="bg-white shadow">
      <div className="flex justify-between items-center px-6 py-4">
        <Link to="/" className="logo-text font-bold text-2xl">
          DripNest
        </Link>

        <nav id="header-middle-nav">
          <ul className="flex space-x-6 font-medium">
            <li>
              <Link to="/" className="hover:text-gray-600">
                BASICS
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-gray-600">
                ACCESSORIES
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-gray-600">
                HATS
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-600">
                ABOUT
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right Navigation Icons */}
        <nav id="header-right-nav">
          <ul className="flex space-x-4 text-gray-700">
            <li>
              <i className="fa-solid fa-magnifying-glass fa-lg"></i>
            </li>
            <li>
              <i className="fa-regular fa-user fa-lg"></i>
            </li>
            <li>
              <i className="fa-solid fa-cart-shopping fa-lg"></i>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
