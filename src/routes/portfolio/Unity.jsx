import Card from '../../components/Card.jsx';

export default function Unity() {
  return (
    <>
      <Card>
        Este juego es un shooter básico que creé siguiendo{' '}
        <a href="https://www.youtube.com/playlist?list=PLFt_AvWsXl0ctd4dgE1F8g3uec4zKNRV0">
          este
        </a>{' '}
        genial tutorial de Sebastian Lague. Tiene muchas features que fueron muy
        divertidas de programar, como estas:
        <ul>
          <li>
            Generación procedural de niveles con editor custom de mapas: esto te
            permite generar los obstáculos y disponerlos de forma aleatoria y
            con distinta densidad pero siempre asegurándote de que se puede
            acceder a cada casillero del nivel.
          </li>
          <li>
            Spawn de enemigos en distintas posiciones del mapa. Pero si campeás
            un mismo casillero te va a aparecer un enemigo encima! Todos los
            enemigos tienen un sistema de navegación que evita obstáculos.
          </li>
          <li>
            Distintos tipos de armas (automática, semi, un disparo) con
            animaciones para el fuego del barril y con cartuchos que caen.
          </li>
        </ul>
      </Card>
      <Card>
				También siguiendo{' '}
        <a href="https://www.youtube.com/playlist?list=PLFt_AvWsXl0ctd4dgE1F8g3uec4zKNRV0">
          un proyecto
        </a>{' '} de Sebastian Lague, conseguí armar este generador procedural de terrenos usando ruido de Perlin, configurable para usar diferente cantidad de octavas y valores de lacunaridad y persistencia. Algunas cosas lindas de este proyecto super divertido:
        <ul>
          <li>
						Editor customizado para jugar con las diferentes variables que configuran al terreno.
          </li>
          <li>
						Los mosaicos de terreno se cargan en base a la posición del jugador de manera que el terreno es infinito. Además, para optimizar la performance, los mosaicos más lejanos a la posición del jugador tienen menor nivel de detalle.
          </li>
          <li>
						Usando shaders se pueden diseñar dstintos niveles de colores y texturas para las distintas elevaciones.
          </li>
					<li>
						Threading para evitar una sobrecarga de uso de CPU cuando un nuevo mosaico se tiene que cargar porque entró en el campo de visión del jugador.
          </li>
        </ul>
			</Card>
    </>
  );
}
