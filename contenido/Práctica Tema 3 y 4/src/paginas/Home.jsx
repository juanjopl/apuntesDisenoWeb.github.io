import {Container} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import fotoPrincipal from '../assets/fotoInicio.webp';
import Canciones from '../componentes/Canciones';

function Home() {
 return (
    <Container className='home'>
      <h1>Blessd</h1>
      <Image 
        src={fotoPrincipal}
        alt="Blessd en un concierto"
        fluid
      />
      <h2>Biografía</h2>
      <p>Stiven Mesa Londoño (27 de enero de 2000), más conocido como Blessd, es un rapero, freestyler y cantante colombiano, joven promesa de la música urbana. Empleado en La Mayoritaria y vendedor  de dulces, Blessd comenzó su carrera en 
        2019 luego de unirse a la disquera JM World Music. Desde entonces ha lanzado temas como Mala Fama, el hit viral Una, Viernes social y Niña con los que se ha posicionado entre lo nuevo de la música. El éxito le llegó, sin embargo, e
        n 2021 con los lanzamientos de Lejanía y el remix de Imposible junto con Maluma. También ha colaborado con artistas como Amaro & Dani,  Magneto, Kensel Tell Them y Sebas R.</p>
      <h2>Inicios</h2>
      <p>De origen humilde, Londoño nació en Itagui, Colombia, el 27 de enero del año 2000. Su eslogan es Hecho en Medellín y su carrera la ha forjado gracias al duro trabajo de sus padres. Mientras estudiaba como cualquier otro adolescente, Stiven también trabajaba La Mayoritaria; además  era vendedor informal de dulces. Solía despertarse a las dos de la mañana para ir a la central, a las 7 entraba a la escuela y luego de salir volvía a trabajar. Los domingos y festivos su jornada empezaba a las dos y terminaba tarde en la noche.</p>
      <p>Entonces, Stiven hacia todo lo posible para costear su carrera. Incluso llegó a pagar la producción de su música a cuotas. Según comentó el mismo artista, la grabación de una de sus canciones le costaba entre 100 y 200 dólares, los cuales pagaba a cuotas o prestando dinero. Pese a las dificultades,  Stiven nunca considero rendirse pues su sueño siempre había sido convertirse en artista. Hoy  por hoy, Stiven es considerado uno de los mejores freestylers de Medellín.</p>
      <h2>Canciones</h2>
      <Canciones />
    </Container>
 )
}
export default Home;