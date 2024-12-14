import "./css-pages/Home.scss";
import image3 from "./img/imagen3.png";
import React, { Fragment, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Message } from "primereact/message";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [isRegistered, setRegistered] = useState(false);
  const [isBotonResgister, setBotonResgister] = useState('Registrarse');
  const [isBotonColor, setBotonColor] = useState('success');

  // Estados para los campos de entrada
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // Manejo del registro
  const handleRegister = () => {
    if (!firstName || !lastName || !email || !password) {
      alert("Todos los campos son obligatorios");
      return;
    }
    setBotonResgister('Resgistrado'); 
    setRegistered(true);
    setVisible(false);
    setBotonColor('blue');
  };

  return (
    <Fragment>
      <div className="container-card-principal">
        <section className="text-bienvenida">
          <h1>Bienvenidos!</h1>
          <p>Eligemos para administrar tu dinero</p>
          <div className="card-modal flex justify-content-center">
            <Button
              label={isBotonResgister}
              style={{
                padding: "5px", borderRadius: "5px", width: "190px",marginLeft: '-50px', backgroundColor: isBotonColor === 'success' 
                ? 'green' : 'default'
               }}
              icon="pi pi-external-link"
              onClick={() => setVisible(true)}
            />
            <Dialog
              className="form"
              visible={visible}
              style={{ width: "30vw", padding: "10px" }}
              onHide={() => setVisible(false)}
            >
              <h1 style={{ textAlign: "center", marginTop: "10px" }}>
                Registrate
              </h1>
              <div className="card-form">
                <div className="mb-3">
                  <label htmlFor="firstName"></label>
                  <InputText
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Primer Nombre"
                    className="w-full"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName"></label>
                  <InputText
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Primer Apellido"
                    className="w-full"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email"></label>
                  <InputText
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Correo"
                    className="w-full"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password"></label>
                  <InputText
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña"
                    className="w-full"
                  />
                </div>
                <div className="container-botones">
                  <Button
                    label="Cancelar"
                    severity="warning"
                    icon="pi pi-times"
                    onClick={() => setVisible(false)}
                    className="btn-cancelar p-button-text"
                  />
                  <Button
                    label="Guardar"
                    severity="success"
                    icon="pi pi-check"
                    onClick={handleRegister}
                    className="btn-guardar"
                  />
                </div>
              </div>
            </Dialog>
          </div>
        {isRegistered && (
          <div className="flex mt-3">
            <Message
              severity="success"
              text="¡Registro exitoso! Ya estás registrado."
            />
          </div>
        )}
        </section>
        <section className="container-imagen-bienvenida">
          <div className="container-image">
            <img src={image3} alt="problema al cargar la imagen" />
          </div>
        </section>
      </div>
      <div className="card-container">
        <Card className="card" title="Simple Card">
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </Card>
        <Card className="card" title="Simple Card">
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </Card>
        <Card className="card" title="Simple Card">
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </Card>
      </div>
    </Fragment>
  );
};

export default Home;
