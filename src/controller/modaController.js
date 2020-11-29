const moda= require ("../model/moda");

const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');

const create = (req,res)=>{
  const senhaComHash = bcrypt.hashSync(req. body.senha,10);
  req.body.senha = senhaComHash;
  const Modas = new moda(req.body);
  
  Modas.save(function(err) {
    if(err){
      res.status(500).send ({message: err.message})
    }
    res.status(201).send(Modas)
  })
};


const getAll = (req,res) => {
    console.log (req.url);
    moda.find (function(err,moda){
        if(err){
            res.status(500).send ({message:err.message})
        }
        res.status(200).send(moda);
    });
};

const postModa = (req,res)=>{
    console.log(req.body);

    let Modas = new moda(req.body)

  Modas.save(function(err){
    if(err) { 
      res.status(500).send({ message: err.message })
    }
    res.status(201).send("Incluído com Sucesso")
  });
};

const deleteModa = (req,res)=>{
  const id = req.params.id
  moda.deleteMany({ id }, function(err){
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
          res.status(200).send({ message : "Removido com sucesso"})
      }
  })
}

const putModa = (req,res) => {
  const id = req.params.id
  moda.updateMany({ id }, { $set : req.body }, { upsert : true }, function(err){
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
          res.status(200).send({ message : "Atualizado com sucesso"})
      }
  })
}

module.exports = {
    create,  
    getAll,
    postModa,
    deleteModa,
    putModa
};