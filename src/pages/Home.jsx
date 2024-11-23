import "./css-pages/Home.scss";
import image3 from "./img/imagen3.png";
import React, { Fragment, useState } from "react";
import { Calendar } from "primereact/calendar";
import { Card } from 'primereact/card';

const Home = () => {
  const [date, setDate] = useState(null);

  return (
    <Fragment className='body'>
      <div className="container-card-principal">
        <section className="text-bienvenida">
          <h1>Bienvenidos!</h1>
          <p>Eligemos para administrar tu dinero</p>
          <div className="container-calendar flex justify-content-center">
            <Calendar className="calendar" placeholder="Selecciona" value={date} onChange={(e) => setDate(e.value)} />
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
