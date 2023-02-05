import { MdOutlineWhatshot as Hot } from "react-icons/md";
import { TbMovie as Movie } from "react-icons/tb";
import { SlScreenDesktop as Screen } from "react-icons/sl";
import { TfiSearch as Search } from "react-icons/tfi";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);
  const active = (path) => {
    if (path === location.pathname) return "active";
    return "";
  };
  return (
    <header>
      <div className='main-div'>
        <span className='logo'>
          <Link className='' to={"/"}>
            <img width={"200px"} src='/logo.png' alt='' srcSet='' />
          </Link>
        </span>

        <Link className='trending-link' to={"/"}>
          <Hot className='hot-icon' />
          <h2 className={["trending", active("/")].join(" ")}>Trendings</h2>
        </Link>
        <Link className='trending-link' to={"/movies"}>
          <Movie className='movie-icon' />
          <h2 className={["movie", active("/movies")].join(" ")}>Movies</h2>
        </Link>
        <Link className='trending-link' to={"/tvseries"}>
          <Screen className='tv-screen' />
          <h2 className={["tv-series", active("/tvseries")].join(" ")}>
            TV Series
          </h2>
        </Link>
        <Link className='trending-link' to={"/search"}>
          <Search className='search-icon' />
          <h2 className={["search-bar", active("/search")].join(" ")}>
            Search
          </h2>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
