const express = require("express");
const router = express.Router();
const controller = require("../controller/expressoes_CulturaisController");

router.get ("/",controller.getAll);
router.get ("/expressoes_Culturais", controller.getAll);
router.get ("/nome/:nome_do_projeto",controller.getByName);
router.get ("/tipo/:Tipo",controller.getByType);
router.post ("/",controller.postExpressoes_Culturais);
router.delete ("/:id",controller.deleteexpressoes_Culturais);
router.put("/:id",controller.putexpressoes_Culturais);



module.exports = router;