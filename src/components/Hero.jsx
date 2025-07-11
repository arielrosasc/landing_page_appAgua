import Button from './Button';

function Hero() {
  return (
    <div className="text">
      <div className="badge">Monitorea el consumo hídrico en FIE</div>
      <h1>Una nueva forma de<br />visualizar el consumo del agua</h1>
      <p>
        Nuestra aplicación te ayuda a visualizar y controlar el consumo de agua en tiempo real. 
        Registra el consumo total diario de agua en la Facultad de Ingeniería Electromecanica de la 
        Universidad de Colima.
      </p>
      <div className="download">
        <Button text="Descargar ahora" variant="primary" />
      </div>
    </div>
  );
}

export default Hero;
