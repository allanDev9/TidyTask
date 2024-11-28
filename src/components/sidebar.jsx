import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
import "./css-components/Sidebar.scss";
import { MdMenu } from "react-icons/md";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isVisible, setIsVisible] = useState(true); // Estado para mostrar/ocultar el Sidebar

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  const toggleSidebar = () => {
    setIsVisible(!isVisible); // Alterna la visibilidad
  };

  return (
    <div className="sidebar-container">
      {/* Botón para alternar visibilidad del Sidebar */}
      <button className="toggle-button" onClick={toggleSidebar}>
        <MdMenu style={{ fontSize: '30px' }} />
      </button>

      {/* Sidebar con visibilidad controlada */}
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
              <Link to="/prestamos" onClick={() => handleActiveLink("/prestamos")}>
                <div className="icon-container">
                  <FaChartSimple />
                </div>
                <span className="text">Prestamos</span>
              </Link>
            </li>
            <li className={activeLink === "/miembros" ? "active" : ""}>
              <Link to="/miembros" onClick={() => handleActiveLink("/miembros")}>
                <div className="icon-container">
                  < IoPersonCircleOutline className="icon" />
                </div>
                <span className="text">Miembros</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
