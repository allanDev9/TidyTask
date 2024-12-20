import { useState } from "react";
import "./css-components/Sidebar.scss";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [isLogout, setLogout] = useState(true);
  const navigate = useNavigate();

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };
  const handleLogout = () => {
    setLogout(false);
    navigate("/form");
  };

  return (
    <div className="sidebar-container">
      <button className="toggle-button" onClick={toggleSidebar}>
        <MdMenu style={{ fontSize: "30px" }} />
      </button>

      {isVisible && (
        <div className="sidebar">
          <ul>
            <li className={activeLink === "/home" ? "active" : ""}>
              <Link to="/home" onClick={() => handleActiveLink("/home")}>
                <div className="icon-container">
                  <FaHome />
                </div>
                <span className="text">Inicio</span>
              </Link>
            </li>
            <li className={activeLink === "/prestamos" ? "active" : ""}>
              <Link
                to="/prestamos"
                onClick={() => handleActiveLink("/prestamos")}
              >
                <div className="icon-container">
                  <FaChartSimple />
                </div>
                <span className="text">Prestamos</span>
              </Link>
            </li>
            <li className={activeLink === "/miembros" ? "active" : ""}>
              <Link
                to="/miembros"
                onClick={() => handleActiveLink("/miembros")}
              >
                <div className="icon-container">
                  <IoPersonCircleOutline className="icon" />
                </div>
                <span className="text">Miembros</span>
              </Link>
            </li>
            <div
              style={{ border: "1px solid white" }}
              className="separador"
            ></div>
            <li
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "240%",
                cursor: "pointer",
                fontWeight: 'bold',
                marginLeft: '-20px'
              }}
              onClick={handleLogout}
            >
              <div className="icon-container">
                <LogoutIcon
                  style={{ color: "white", fontSize: "20px" }}
                  className="icon"
                />
              </div>
              <div>
                <span className="text">Cerrar Sesión</span>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
