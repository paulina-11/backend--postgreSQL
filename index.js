// importar 
const express = require('express');
// inicializar express
const app = express()
// importamos rutas
const router = require('./routes');

// comunicación a traves del formato Json
// middlewares
app.use(express.json())
// funcionalidad extra para imagenes o pdf y se debe poner true
// permitimos recibir datos de codificacion de formulario
app.use(express.urlencoded({extended:false}))
// utilizamos las rutas
app.use(router)

// levantar servidor
app.listen(3000,(error)=>{
    error ? console.log(error) : console.log('Server running');
})

// Inicializar el servidor con node index.js
// exportar
// module.exports = express;