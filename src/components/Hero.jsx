import Button from './Button';

function Hero() {
  return (
    <div className="text">
      <div className="badge">Monitorea tu consumo hídrico</div>
      <h1>Una nueva forma de<br />gestionar el uso del agua</h1>
      <p>
        Nuestra aplicación te ayuda a visualizar y controlar el consumo de agua en tiempo real. 
        Ahorra recursos, detecta fugas y toma decisiones inteligentes por el planeta.
      </p>
      <div className="download">
        <Button text="Descargar ahora" variant="primary" />
      </div>
    </div>
  );
}

export default Hero;
