const { Router } = require("express");
const router = Router();
const {
  crearMascota,
  obtenerTodasMascotas,
  obtenerMascota,
  modificarMascota,
  eliminarMascota,

  apiController,
  apiSumaController,
  apiUsuarioController,
  apiBodyController
} = require("../controllers");

// CRUD de mascotas
router.post("/mascotas", crearMascota);
router.get("/mascotas", obtenerTodasMascotas);
router.get("/mascotas/:idMascota", obtenerMascota);
router.put("/mascotas/:idMascota", modificarMascota);
router.delete("/mascotas/:idMascota", eliminarMascota);


router.get("/api", apiController);
// si son query no necesita : 
router.get("/api/suma", apiSumaController);
// por parametro es con /:
router.get("/api/usuario/:nombre", apiUsuarioController);
router.put("/api/body", apiBodyController);

module.exports = router;
