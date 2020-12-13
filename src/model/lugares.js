const mongoose = require ('mongoose');

const lugaresSchema = new mongoose.Schema({
    id:{type: Number, required: true},
    nome : { type : String, required: true},
    foto: {type: String},
    estado: { type: String, required: true},
    cidade: { type: String, required: true},
    bairro: { type: String, required: true},
    Rua: {type: String},
    telefone: {type:Number},
    funcionamento:{ type: String},
    site: { type: String},
    Tipo: [{type: String}],
    Resumo: {type: String, required: true},
},{
    
    versionKey: false
});


const lugares = mongoose.model('lugares', lugaresSchema);


module.exports = lugares;