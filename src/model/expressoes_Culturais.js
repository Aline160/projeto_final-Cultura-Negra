const mongoose = require ('mongoose');

const expressoes_CulturaisSchema = new mongoose.Schema({
    id:{type: Number, required: true},
    nome_do_projeto : { type : String, required: true},
    foto: {type: String},
    site: { type: String},
    Tipo: {type: String, required: true},
    profissionais: {type: String},
    Historia: {type: String, required: true},
},{
    
    versionKey: false
});


const expressoes_Culturais = mongoose.model('expressoes_Culturais', expressoes_CulturaisSchema);


module.exports = expressoes_Culturais;