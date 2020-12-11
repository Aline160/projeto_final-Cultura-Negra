const lugares= require ("../model/lugares");


const getAll = (req,res) => {
    console.log (req.url);
      lugares.find (function(err,lugares){
          if(err){
              res.status(500).send ({message:err.message})
          }
          res.status(200).send(lugares);
      });
};

const postLugares = (req,res)=>{
    console.log(req.body);

    let lugar = new lugares(req.body)

  lugar.save(function(err){
    if(err) { 
      res.status(500).send({ message: err.message })
    }
    res.status(201).send("Incluído com Sucesso")
  });
};

const getByType = (req, res) => {
    const Tipo = req.params.Tipo;
      lugares.find({Tipo},function(err,lugares){
        if(err){
          res.status(500).send('Não temos essa opção cadastrada, Por favor tente outra')
        }else
          return res.status(200).send(lugares);
      })
  };

  const getByID = (req, res) => {
    const id = req.params.id;
      lugares.findOne({id},function(err,lugares){
        if(err){
          res.status(500).send('Não temos o cadastro desse id')
        }else
          return res.status(200).send(lugares);
      })
  };

  const getByCity = (req, res) => {
    const cidade = req.params.cidade;
      lugares.find({cidade},function(err,lugares){
        if(err){
          res.status(500).send('Não temos essa cidade cadastrada')
        }else
          return res.status(200).send(lugares);
      })
  };

  const deleteLugares = (req,res)=>{
    const id = req.params.id
    lugares.deleteMany({ id }, function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message : "Removido com sucesso"})
        }
    })
  }
  
  const putLugares = (req,res) => {
    const id = req.params.id
    lugares.updateMany({ id }, { $set : req.body }, { upsert : true }, function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message : "Atualizado com sucesso"})
        }
    })
  }

module.exports = { 
    getAll,
    getByID,
    getByCity,
    postLugares,
    getByType,
    deleteLugares,
    putLugares
};