import { useState} from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
import "./css-components/Sidebar.scss";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('');
  
  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="sidebar">
      <ul>
        <li className={activeLink === "/home" ? "active" : ""}>
          <Link to="/home" onClick={() => handleActiveLink("/home")}>
            <FaHome className="me-2" /> Inicio
          </Link>
        </li>
        <li className={activeLink === "/prestamos" ? "active" : ""}>
          <Link to="/prestamos" onClick={() => handleActiveLink("/prestamos")}>
            <FaChartSimple className="me-2" /> Prestamos
          </Link>
        </li>
        <li className={activeLink === "/miembros" ? "active" : ""}>
          <Link to="/miembros" onClick={() => handleActiveLink("/miembros")}>
            <IoPersonCircleOutline className="me-2" /> Miembros
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
