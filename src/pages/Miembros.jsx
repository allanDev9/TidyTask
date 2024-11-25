import { useState } from "react";
import Person from "./Person/Person";
import "./css-pages/Miembros.scss";
import imagen3 from "./img/imagen3.png";

const Miembros = () => {
  const [persons, serPersons] = useState([
    { code: "001", name: "Juan Pérez", category: "Administrador" },
    { code: "002", name: "Tio Grandpa", category: "Administrador" },
    { code: "003", name: "Juan Pérez", category: "Administrador" },
    { code: "004", name: "Juan Pérez", category: "Administrador" },
    { code: "005", name: "Juan Pérez", category: "Administrador" },
    { code: "006", name: "Juan Pérez", category: "Administrador" },
    { code: "007", name: "Juan Pérez", category: "Administrador" },
    { code: "008", name: "Juan Pérez", category: "Administrador" },

  ]);

  return (
    <section className="container">
      <h1 style={{ display: "flex", justifyContent: "center", color: "blue" }}>
        Miembros
      </h1>
      <div
        className="container-datatable-miembros"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="row" style={{ height: "30%" }}>
          <Person data={persons} />
        </div>
      </div>
    </section>
  );
};

export default Miembros;
