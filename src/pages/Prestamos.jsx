import React, { useState, useRef } from "react";
import { MultiSelect } from "primereact/multiselect";
import "./css-pages/Prestamos.scss";
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { Toast } from 'primereact/toast';


const prestamos = () => {
  const [selectedCities, setSelectedCities] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  const toast = useRef(null);

  const accept = () => {
    toast.current.show({
      severity: "info",
      summary: "Confirmed",
      detail: "You have accepted",
      life: 3000,
    });
  };

  const reject = () => {
    toast.current.show({
      severity: "warn",
      summary: "Rejected",
      detail: "You have rejected",
      life: 3000,
    });
  };

  const confirm1 = () => {
    confirmDialog({
      message: "Are you sure you want to proceed?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      defaultFocus: "accept",
      accept,
      reject,
    });
  };

  const confirm2 = () => {
    confirmDialog({
      message: "Do you want to delete this record?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      defaultFocus: "reject",
      acceptClassName: "p-button-danger",
      accept,
      reject,
    });
  };
  return (
    <div className="section-prestamo">
      <h1 className="title-prestamos">Elije Tu Prestamo</h1>
      <div className="container-prestamos">
        <h1>Tipos De Prestamos</h1>
        <span>Que tipo de prestamo quieres realizar?</span>
        <div className="card-prestamos flex justify-content-center">
          <MultiSelect
            value={selectedCities}
            onChange={(e) => setSelectedCities(e.value)}
            options={cities}
            optionLabel="name"
            placeholder="Selecciona Tu Prestamo"
            maxSelectedLabels={3}
            className="w-full md:w-20rem"
          />
        </div>
        <section className="container-list">
          <Toast ref={toast} />
          <ConfirmPopup />
        </section>
      </div>
    </div>
  );
};
export default prestamos;
