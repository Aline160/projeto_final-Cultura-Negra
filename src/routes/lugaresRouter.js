const express = require("express");
const router = express.Router();
const controller = require("../controller/lugaresController");

router.get ("/",controller.getAll);
router.get ("/lugares", controller.getAll);
router.get ("/:id",controller.getByID);
router.get ("/tipo/:Tipo",controller.getByType);
router.get ("/cidade/:cidade",controller.getByCity);
router.post ("/",controller.postLugares);
router.delete ("/:id",controller.deleteLugares);
router.put("/:id",controller.putLugares);




module.exports = router;