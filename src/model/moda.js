const mongoose = require ('mongoose');

const modaSchema = new mongoose.Schema({
    id:{type:Number},
    nome : { type : String},
    email: { type: String },
    senha: { type: String },
    estado: { type: String},
    cidade: { type: String},
    bairro: { type: String},
    Rua: {type: String},
    telefone: {type:Number},
    site: { type: String},
    redeSocial: {type: String},
    Tipo: {type: String},
    Publico: {type: String},
    Resumo: {type: String},
    //Endereço: [{ pais: String}, ],
},{
    
    versionKey: false
});


const moda = mongoose.model('moda', modaSchema);


module.exports = moda;