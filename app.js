// PASO 1: Crear una constante llamada express y requerir el modulo express
const express = require('express');
// PASO 2: Ejecución de Express
// Recorda que express es una funcion... hay que invocarla y guardalo en una constante llamada app
const app = express();
// PASO 3: Informacion que vamos a usar
// Crea una variable (por ej. heroes) y asignale como valor el contenido del archivo "heroes.json"
// Tip: podes usar el require como si fuera un modulo ;)
const heroes = require('./heroes.json')
// PASO 4: Configurando el servidor
// Crea una constante llamada PORT y asignale como valor el numero tres mil
// ...
const PORT = 3000
// Reemplaza los guiones por la constante para que utilice ese numero de puerto
// Sabes por que lo definimos como constante y no como variable ? 
app.listen(3000, () => console.log(`Server running in ${PORT} port`));

// CONSIGNA 1
// Ruta Raíz / Home
app.get('/', function(req,res){
res.send('Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Héroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.')
});

// CONSIGNA 2
// Ruta /heroes
// Consigna: enviar todo el array
app.get('/heroes',(req,res) => {
  res.send(heroes);
});

// CONSIGNA 3
// Aqui creas la ruta para devolver la pagina de los creditos
// Podes resolverlo en base a los ejemplos anteriores.

// Ruta... ¿Pára qué sirve esto?
app.get('/creditos', (req, res) => {
  res.send('Juan Cruz Serafini. Doing the tough things sets winners apart from losers.');
});
