const moda= require ("../model/moda");

const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');
const SECRET= process.env.SECRET;

const create = (req,res)=>{
  const senhaComHash = bcrypt.hashSync(req.body.senha,10);
  req.body.senha = senhaComHash;
  const Modas = new moda(req.body);
  
  Modas.save(function(err) {
    if(err){
      res.status(500).send ({message: err.message})
    }else{
    return res.status(201).send(Modas)
    }
  })
};


const getAll = (req,res) => {
  const authHeader= req.get('authorization');

  if (!authHeader) {
    return res.status(401).send('Tô de Olho! Cadê o token heim');
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, SECRET, function(erro) {
    if (erro) {
      return res.status(403).send('Nope');
    }


    moda.find (function(err,moda){
        if(err){
            res.status(500).send ({message:err.message})
        }
        res.status(200).send(moda);
    });
  });
};

const login = (req,res) => {
  moda.findOne ({email:req.body.email},function(error,Modas){
    if (!Modas) {
      return res.status(404).send(`Esse email não está cadastrado ${req.body.email}`);
    }

    const senhaValida = bcrypt.compareSync(req.body.senha, Modas.senha);

    if (senhaValida) {
      consolelog(senhaValida)
      const token = jwt.sign({senha: req.body.senha }, SECRET);
      return res.status(200).send(token);
    } else
    return res.status(403).send('Senha invalida');
  });
};

const getByType = (req, res) => {
  const Tipo = req.params.Tipo;
    moda.find({Tipo},'id nome email foto telefone site redeSocial Publico Resumo',function(err,moda){
      if(err){
        res.status(500).send('Não temos o registro desse pofissional')
      }else
        return res.status(200).send(moda);
    })
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
    login,
    postModa,
    deleteModa,
    putModa,
    getByType
};