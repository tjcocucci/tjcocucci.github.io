import Card from '../../components/Card.jsx';

export default function Academic() {
  return (
    <>
      <Card>
        <b>Publicaciones</b>
        <ul>
          <li>
            <p>
              En este paper desarrollamos un método online de inferencia de
              errores para asimilación de datos secuencial:
            </p>
            <p>
              Cocucci T. J., Pulido M., Lucini M. & Tandeo P. (2022) Model error
              covariance estimation in particle and ensemble Kalman filters
              using an online expectation–maximization algorithm. Quarterly
              Journal of the Royal Meteorological Society.{' '}
              <a href="https://doi.org/10.1002/qj.3931">
                https://doi.org/10.1002/qj.3931
              </a>
            </p>
          </li>
          <li>
            <p>
              En esta publicación proponemos un método para asimilar datos por
              ensambles en modelos basados en agentes:
            </p>
            <p>
              Cocucci, T. J., Pulido, M., Aparicio, J. P., Ruı́z, J., Simoy, M.
              I. & Rosa, S. (2022) Inference in epidemiological agent-based
              models using ensemble-based data assimilation. PLOS ONE.{' '}
              <a href="https://doi.org/10.1371/journal.pone.0264892">
                https://doi.org/10.1371/journal.pone.0264892
              </a>
            </p>
          </li>
        </ul>
      </Card>
      <Card>
        <b>Formación</b>
        <ul>
          <li>
            En 2015 me recibí de la Licenciatura en Matemática de la FaMAF,
            Universidad Nacional de Córdoba.
          </li>
          <li>
            En 2022 me doctoré con el título de Doctorado en Ciencias de la
            Computación en la FaMAF, Universidad Nacional de Córdoba.
          </li>
        </ul>
      </Card>
      <Card>
        <b>Docencia</b>
      </Card>
    </>
  );
}
