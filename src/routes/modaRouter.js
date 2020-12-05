const express = require("express");
const router = express.Router();
const controller = require("../controller/modaController");

router.get ("/",controller.getAll);
router.get ("/moda", controller.getAll);
router.post ("/",controller.postModa);
router.post('/login',controller.login);
router.post('/',controller.create);
router.delete ("/:id",controller.deleteModa);
router.put("/:id",controller.putModa);




module.exports = router;