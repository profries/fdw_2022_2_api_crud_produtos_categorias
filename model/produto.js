const mongoose = require ('mongoose')
//const Categoria = require('./categoria')

const Schema = mongoose.Schema;
// const {Schema}  = mongoose;

const ProdutoSchema = new Schema({
    nome: String,
    preco: Number,
    categoria: { type: Schema.Types.ObjectId, ref: 'Categoria' }
},
{
    versionKey: false
});

module.exports = mongoose.model("Produto", ProdutoSchema);