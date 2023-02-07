import "./App.scss";
import { FaBehance, FaDribbble } from "react-icons/fa";
import { IoMailOutline, IoChevronForwardCircle, IoStar } from "react-icons/io5";
import { IconContext } from "react-icons";

function App() {
  return (
    <>
      <header>
        <div className="logo_rapper">
          daily<span>frontend</span>
        </div>
        <div className="menu_container">
          <span>
            <IconContext.Provider
              value={{
                color: "#000",
                size: "18px",
                className: "icons_container",
              }}
            >
              <div className="icon">
                <FaBehance />
              </div>
              <div className="icon">
                <FaDribbble />
              </div>
            </IconContext.Provider>
          </span>
          <span>
            <IconContext.Provider
              value={{
                color: "#000",
                size: "18px",
              }}
            >
              <div className="icon">
                <IoMailOutline />
                hello@example.co
              </div>
            </IconContext.Provider>
          </span>
        </div>
      </header>
    </>
  );
}

export default App;
