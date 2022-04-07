localStorage.setItem('nombre', 'juan');

const producto = {
    nombre : 'Monitor 20 pulgadas',
    precio :300
}

const productoString = JSON.stringify( producto );
localStorage.setItem('producto', productoString);