import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
//www.w3schools.com/howto/howto_js_topnav.asp

// function myTypeOf(someThing) {
//   return new Object().toString.call(someThing).match(/\[object (.*?)\]/)[1];
// }

const Layout = () => {
  let lastTarget = null;

  const dostuff = (e) => {
    if (lastTarget !== null) {
      lastTarget.className = "";
    }
    e.target.className = "active";
    lastTarget = e.target;
  };

  return (
    <>
      <nav className="topnav">
        <div className="center">
          <Link to="/" onClick={dostuff}>
            Home
          </Link>
          <Link to="/website" onClick={dostuff}>
            Websites
          </Link>
          <Link to="/book" onClick={dostuff}>
            Books
          </Link>
          <Link to="/video" onClick={dostuff}>
            Videos
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
