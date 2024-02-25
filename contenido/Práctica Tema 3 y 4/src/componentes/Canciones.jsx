import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Canciones () {
    const datos = [
        {'thumbnail' : '../src/assets/portadas/portada1.webp',
        'link' : 'https://www.youtube.com/watch?v=oMjqYgfqBkQ&pp=ygUSY29uZGVuYWRvIGFsIGV4aXRv',
        'title' : 'Condenado al Exito'},
        {'thumbnail' : '../src/assets/portadas/portada2.webp',
        'link' : 'https://www.youtube.com/watch?v=og9ewQAioUk&pp=ygUHc2kgc2FiZQ%3D%3D',
        'title' : 'Si Sabe Ferxxo'},
        {'thumbnail' : '../src/assets/portadas/portada3.webp',
        'link' : 'https://www.youtube.com/watch?v=Kzvo_mQOjwQ&pp=ygUKc2kgYSBidWVubw%3D%3D',
        'title' : 'Si a Bueno'},
        {'thumbnail' : '../src/assets/portadas/portada4.webp',
        'link' : 'https://www.youtube.com/watch?v=ZtJPI2mxaNk&pp=ygUMb2ppdG9zIHJvam9z',
        'title' : 'Ojitos Rojos'},
        {'thumbnail' : '../src/assets/portadas/portada5.webp',
        'link' : 'https://www.youtube.com/watch?v=VWttF8wAZcw&pp=ygUNZXVyb3BhIGJsZXNzZA%3D%3D',
        'title' : 'Europa'},
        {'thumbnail' : '../src/assets/portadas/portada6.webp',
        'link' : 'https://www.youtube.com/watch?v=mZNQPMUok6Y&pp=ygUPcXVpZW4gdHYgYmxlc3Nk', 
        'title' : 'Quien TV'},
        {'thumbnail' : '../src/assets/portadas/portada7.webp',
        'link' : 'https://www.youtube.com/watch?v=mjt0CBuS-8M&pp=ygUec2llbXByZSBibGVzc2QgeSBqYW1ieSBlbCBmYXZv',
        'title' : 'Siempre'},
        {'thumbnail' : '../src/assets/portadas/portada8.webp',
        'link' : 'https://www.youtube.com/watch?v=6z-YeIf7ahw&pp=ygUUZG9zIHByb2JsZW1hcyBibGVzc2Q%3D',
        'title' : 'Dos Problemas'}
    ]


    return (
    <Container className='divCanciones'>
        {datos.map((cancion, index) => (
          <Card className='tarjetaCancion' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={cancion.thumbnail} alt={cancion.title} />
            <Card.Body>
                <Card.Title><a href={cancion.link} id='linkCancion'>{cancion.title}</a></Card.Title>
            </Card.Body>
            </Card>
        ))}
    </Container>
    )
}
export default Canciones;