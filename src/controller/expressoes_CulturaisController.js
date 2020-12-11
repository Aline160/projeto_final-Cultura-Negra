const expressoes_Culturais= require ("../model/expressoes_Culturais");


const getAll = (req,res) => {
    console.log (req.url);
      expressoes_Culturais.find (function(err,expressoes_Culturais){
          if(err){
              res.status(500).send ({message:err.message})
          }
          res.status(200).send(expressoes_Culturais);
      });
};

const getByName = (req, res) => {
    const nome_do_projeto = req.params.nome_do_projeto;
      expressoes_Culturais.findOne({nome_do_projeto},function(err,expressoes_Culturais){
        if(err){
          res.status(500).send('Não está cadastado')
        }else
          return res.status(200).send(expressoes_Culturais);
      })
  };

  const getByType = (req, res) => {
    const Tipo = req.params.Tipo;
      expressoes_Culturais.find({Tipo},function(err,expressoes_Culturais){
        if(err){
          res.status(500).send('Não temos essa opção cadastrada, Por favor tente outra')
        }else
          return res.status(200).send(expressoes_Culturais);
      })
  };

const postExpressoes_Culturais = (req,res)=>{
    console.log(req.body);

    let expressao_Cultural = new expressoes_Culturais(req.body)

  expressao_Cultural.save(function(err){
    if(err) { 
      res.status(500).send({ message: err.message })
    }
    res.status(201).send("Incluído com Sucesso")
  });
};

const deleteexpressoes_Culturais = (req,res)=>{
    const id = req.params.id
    expressoes_Culturais.deleteMany({ id }, function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message : "Removido com sucesso"})
        }
    })
  }
  
  const putexpressoes_Culturais = (req,res) => {
    const id = req.params.id
    expressoes_Culturais.updateMany({ id }, { $set : req.body }, { upsert : true }, function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message : "Atualizado com sucesso"})
        }
    })
  }

module.exports = { 
    getAll,
    getByName,
    getByType,
    postExpressoes_Culturais,
    deleteexpressoes_Culturais,
    putexpressoes_Culturais
};
