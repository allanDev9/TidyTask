import React, { useState, useEffect } from "react";
import "./Person.scss";
import { DataTable, Column } from 'primereact';
import { AutoComplete } from "primereact/autocomplete";

function Person({ data }) {
  const [datatable, setDatable] = useState(data);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const search = (event) => {
    const query = event.query.toLowerCase();

    const results = data.filter((item) =>
      item.name.toLowerCase().includes(query) || item.code.toLowerCase().includes(query)
    );

    // Actualizar las sugerencias del AutoComplete
    setFilteredCountries(results);

    // Si hay resultados, actualizamos la tabla; si no, restauramos todos los datos
    if (query.trim() !== '') {
      setDatable(results);
    } else {
      setDatable(data); // Restablecer la tabla si el campo está vacío
    }
  };

  // Filtrar los datos al cuando el input este vacio
  const handleInputChange = (e) => {
    const value = e.value || '';
    setSelectedCountry(value);

    if (value.trim() === '') {
      setDatable(data);
    }
  };

  return (
    <div className="card" style={{ marginTop: '40px', padding: '30px', border: '1px solid black'}}>
      <div className="search-input flex justify-content-center">
        <AutoComplete field="name" value={selectedCountry} placeholder="Buscar" suggestions={filteredCountries} completeMethod={search} onChange={handleInputChange}/>
      </div>
      <DataTable value={datatable} className="custom-datatable" selectionMode="single" paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}>
        <Column className="color-column" field="code" header="Código"></Column>
        <Column className="color-column" field="name" header="Nombre"></Column>
        <Column className="color-column" field="category" header="Rol"></Column>
      </DataTable>
    </div>
  );
}

export default Person;
