import { useState } from "react";
import Person from "./Person/Person";
import "./css-pages/Miembros.scss";
import miembrosData from "./Json-Pages/miembros.json";

const Miembros = () => {
  const [persons, serPersons] = useState(miembrosData);

  return (
    <section className="container">
      <h1 style={{ display: "flex", justifyContent: "center", color: "black", fontWeight: 'bold' , marginTop: '30px'}}>
        Miembros
      </h1>
      <div
        className="container-datatable-miembros"
      >
        <div className="row">
          <Person data={persons} />
        </div>
      </div>
    </section>
  );
};

export default Miembros;
