import "./css-pages/Home.scss";
import image3 from "./img/imagen3.png";
import React, { Fragment, useState } from "react";
import { Calendar } from "primereact/calendar";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Message } from 'primereact/message';
import { InputText } from 'primereact/inputtext';

const Home = () => {
  const [date, setDate] = useState(null);

  const [visible, setVisible] = useState(false);
  const footerContent = (
    <div>
      <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
      <Button label="Yes" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
    </div>
  );

  return (
    <Fragment className='body'>
      <div className="container-card-principal">
        <section className="text-bienvenida">
          <h1>Bienvenidos!</h1>
          <p>Eligemos para administrar tu dinero</p>
          <div className="card-modal flex justify-content-center">
            <Button label="Registrarse" style={{ padding: '5px', borderRadius: '5px', width: '150px' }} icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog visible={visible} style={{ width: '50vw', height: '100vh', padding: '10px' }} onHide={() => { if (!visible) return; setVisible(false); }}>
            <h1 style={{ textAlign: 'center', marginTop: '10px'}}>Registrate</h1>
              <div className="card-form">
                <div className="flex flex-wrap align-items-center mb-3 gap-2">
                  <label htmlFor="text" className="p-sr-only">Username</label>
                  <InputText id="username" placeholder="Primer Nombre" className="p-invalid mr-2" />
                  {/* <Message severity="error" text="Username is required" /> */}
                </div>
                <div className="flex flex-wrap align-items-center mb-3 gap-2">
                  <label htmlFor="text" className="p-sr-only">Username</label>
                  <InputText id="username" placeholder="Primer Apellido" className="p-invalid mr-2" />
                  {/* <Message severity="error" text="Username is required" /> */}
                </div>
                <div className="flex flex-wrap align-items-center mb-3 gap-2">
                  <label htmlFor="username" className="p-sr-only">Username</label>
                  <InputText id="username" placeholder="Correo" className="p-invalid mr-2" />
                  {/* <Message severity="error" text="Username is required" /> */}
                </div>
                <div className="flex flex-wrap align-items-center gap-2">
                  <label htmlFor="email" className="p-sr-only">Email</label>
                  <InputText id="email" placeholder="contraseña" className="p-invalid mr-2" />
                  {/* <Message severity="error" /> */}
                </div>
                <div className="container-botones">
                  <Button label="Cancelar" severity="warning" icon="pi pi-times" onClick={() => setVisible(false)} className="btn-cancelar p-button-text" />
                  <Button label="Guardar" severity="success" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus className="btn-guardar" />
                </div>
              </div>
            </Dialog>
          </div>
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
          </p>
        </Card>
        <Card className="card" title="Simple Card">
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
          </p>
        </Card>
        <Card className="card" title="Simple Card">
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
          </p>
        </Card>
      </div>
    </Fragment>
  );
};
export default Home;
