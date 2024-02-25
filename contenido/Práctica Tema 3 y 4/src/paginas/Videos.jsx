import { Container } from 'react-bootstrap';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

function Videos() {
    return (
    <Container className='videos'>
        <h2>Condenado al Exito II</h2>
            <section className='seccion'>
                <video controls>
                    <track 
                        src='../src/assets/subtitulos/subtitulos1.vtt'
                        srcLang='es'
                        kind='subtitles'
                        label='SUB'
                    />
                    <source src={video1} type="video/mp4"/>
                    <img src="" alt="Video no soportado" />
                </video>
                <p>
                La canción toca temas de superación personal y la importancia de mantenerse fiel a uno mismo y a sus raíces. Blessd enfatiza la idea de que el éxito es un proceso que requiere paciencia y esfuerzo, y celebra los logros alcanzados sin olvidar de dónde viene. La mención de Medellín y la importancia de representar su origen demuestra el orgullo del artista por su identidad y su comunidad.
                </p>
            </section>
        <h2>A2P</h2>
            <section className='seccion'>
                <video controls>
                    <track 
                        src='../src/assets/subtitulos/subtitulos2.vtt'
                        srcLang='es'
                        kind='subtitles'
                        label='SUB'
                    />
                    <source src={video2} type="video/mp4"/>
                    <img src="" alt="Video no soportado" />
                </video>
                <p>
                La canción toca temas de lealtad y autenticidad, diferenciando entre aquellos que han vivido realmente las experiencias de la calle y los que solo las simulan. La colaboración de artistas de diferentes países refuerza la idea de unidad y éxito compartido en la industria musical urbana. La mezcla de idiomas (español e inglés) y las referencias culturales amplían su alcance y conectan con una audiencia global.
                </p>
            </section>
    </Container>
    )
}
export default Videos;