const mongoose = require ('mongoose')
const {Schema}  = mongoose;

const CategoriaSchema = new Schema({
    nome: String,
},
{
    versionKey: false,
//    collection: 'categ'
});

module.exports = mongoose.model("Categoria", CategoriaSchema);