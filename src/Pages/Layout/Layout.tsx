import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
//www.w3schools.com/howto/howto_js_topnav.asp

// function myTypeOf(someThing) {
//   return new Object().toString.call(someThing).match(/\[object (.*?)\]/)[1];
// }

const Layout = () => {
  let lastTarget: any = null; //eslint-disable-line @typescript-eslint/no-explicit-any

  const dostuff = (
    e: any /* eslint-disable-line @typescript-eslint/no-explicit-any */
  ) => {
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

      <div className="title">My Super Awesome React Resources!</div>
      <div className="subtitle">Inspect the awesomeness and be awed!</div>
      <div className="eduResources"></div>
      <Outlet />
    </>
  );
};

export default Layout;
