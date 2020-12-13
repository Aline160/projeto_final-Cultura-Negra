const mongoose = require ('mongoose');

const modaSchema = new mongoose.Schema({
    id:{type: Number, auto: true, required: true},
    nome : { type : String, required: true},
    email: { type: String, required: true },
    senha: { type: String, required: true },
    foto: {type: String},
    estado: { type: String},
    cidade: { type: String},
    bairro: { type: String},
    Rua: {type: String},
    telefone: {type:Number},
    site: { type: String},
    redeSocial: {type: String},
    Tipo: [{type: String}],
    Publico: {type: String},
    Resumo: {type: String},
},{
    
    versionKey: false
});


const moda = mongoose.model('moda', modaSchema);


module.exports = moda;