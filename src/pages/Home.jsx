import "./css-pages/Home.scss";
import image3 from "./img/imagen3.png";
import React, { Fragment, useState } from "react";
import { Calendar } from "primereact/calendar";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

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
            <Button label="Registrarse" style={{ padding: '5px', borderRadius: '5px', width: '150px'}} icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog header="Header" visible={visible} style={{ width: '50vw' , height: '100vh', padding: '10px'}} onHide={() => {if (!visible) return; setVisible(false); }} footer={footerContent}>
                <p className="m-0" style={{ padding: '20px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <div className="container-calendar flex justify-content-center">
            <Calendar className="calendar" placeholder="Selecciona" value={date} onChange={(e) => setDate(e.value)} />
          </div>
                </p>
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
        <Card className="card"  title="Simple Card">
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
