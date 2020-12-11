const express = require("express")
const router = express.Router()

router.get("/", function (req, res) {
  res.status(200).send({
    title: "Valorizando a Cultura Negra",
    version: "1.0.0",
    descrition: "Falar de cultura negra é falar da luta e da resistência de um povo, para não perder suas raízes ou ser desconectado da própria história. História bonita de luta que corre em suas veias, pôs essa ressignificação de sua história de sua própria identidade, fortalecerá este sujeito para sua luta diária. Essa tomada de consciência está relacionada com o processo de se perceber negro resgatando assim as suas raízes históricas e culturais, podendo Ser Negro e tendo assim a consciência do valor que possui em nossa sociedade e na construção da mesma. Por esse processo de resgate, de revisitar sua cultura faz-se tão importante para o negro do Brasil que até hoje tem seus costumes atacados pelo pré conceito e pelo racismo. É necessario resgatar nossa identidade, reconhecer-se como parte de um povo que nunca baixou sua cabeça diante da opressão. Somos um povo de uma rica e linda e diversificada cultural, somos remanescentes de guerreiros e guerreiras, príncipes e princesas, somos negros, somos resistência."
  })
})


module.exports = router
