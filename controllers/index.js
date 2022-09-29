// req ---> recibe los datos de la peticion
// res ---> responde al cliente
// req.params ---> Recibimos los datos que llegan por la URL pero son obligatorios
// req.query ---> Recibimos los datos que llegan por la URL pero son opcionales
// req.body ---> Recibimos los datos que llegan en el body

//  Controladores de Mascotas
// POST por body
const crearMascota = (req, res) => {
  console.log("crear mascota");
  const nombre = req.body.nombre
  const edad = req.body.edad
  console.log(`El nombre de la mascota es ${nombre} y tiene ${edad}`);

  res.status(201).send({
    message: "Tu mascota fue creada",
  });
};

// GET
const obtenerTodasMascotas = (req, res) => {
  console.log("obtener todas las mascotas");
  res.status(200).send({
    data:[
        {
            "name":"Mascota 1"
        },
        {
            "name":"Mascota 2"
        }
    ]
  })
};


const obtenerMascota = (req, res) => {
  console.log("obtener una mascota");
};

const modificarMascota = (req, res) => {
  console.log("modificar mascota");
};

const eliminarMascota = (req, res) => {
  console.log("eleminar mascota");
};



// Ejercicios
// Realiza los siguientes end points y testealos con Postman, insomnia, Thunder, etc...
// Agrega un endpoint '/api/' que responda a una petición de tipo GET con un código de estado 200 y el siguiente json: { 'mensaje':'hola mundo' }
// Agrega un endpoint '/api/suma' que responda a una petición de tipo GET con la suma de dos números que reciba mediante las querys num1 y num2. El servidor debe responder con un código de estado 200 y un json como el siguiente: { 'resultado': 7 }

// Agrega un endpoint '/api/usuario/' que responda a una petición de tipo GET con el nombre que sea recibido a través de params. El servidor debe responder con un código de estado 200 y un json como este: { 'usuario': 'Edwin' }
// Agrega un endpoint '/api/body que responda a una petición de tipo PUT con el body que el cliente envíe al hacer la petición. Ejemplo: cliente envía un body desde postman o insomnia que luce como este:
// { “nombre”: “Maui”, “ocupacion”: “Sensei” }
// Entonces, el servidor debe responder con un objeto idéntico al que envía el cliente, junto con un status de respuesta 200.
//  POST por query
const apiController = (req,res)=>{
    res.status(200).send({
        "mensaje":"Hola mundo"
    })
}
// get query
const apiSumaController = (req, res) => {
    const num1 = Number(req.query.num1)
    const num2 =  Number(req.query.num2)
   const resSuma = num1 + num2

   res.status(200).send({
    resultado : resSuma
   })
};


const apiUsuarioController=(req,res)=>{
console.log(req.params);
 res.status(200).send({
   usuario: req.params.nombre
 });
}
const apiBodyController = (req,res)=>{
    const data = req.body
    res.status(200).send(data);
}
module.exports = {
  crearMascota,
  obtenerTodasMascotas,
  obtenerMascota,
  modificarMascota,
  eliminarMascota,
  apiController,
  apiSumaController,
  apiUsuarioController,
  apiBodyController
};