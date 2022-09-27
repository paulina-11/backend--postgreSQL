const {Router} = require('express')
const router = Router()

// Esperar una respuesta
// primer parametro es el url
// segundo parametro funcion
// req metadata, informacion del get
// params y query
router.get ('/users',function (req,res){
    console.log(req.body);
    res.json({message:'Hola soy la respuesta'})
})

module.exports = router