const Categoria = require("../model/Categoria");


exports.listar = (req, res) => {
    Categoria.find({}, (err, categorias) => {
        if(err){
            res.status(500).send(err);
        }
        res.json(categorias);
    })
}

exports.inserir = (req, res) => {
    const categoriaRequest = req.body;
    if(categoriaRequest && categoriaRequest.nome) {

        const categoriaNovo = new Categoria(categoriaRequest);
        categoriaNovo.save((err, categoriaSalvo) => {
            if(err) {
                res.status(500).send(err);
            }
            else {
                return res.status(201).json(categoriaSalvo);
            }
        })
        
    }
    else {
        return res.status(400).json({
            Erro:"Nome sao obrigatorios"
        })
    }
}

exports.buscarPorId = (req, res) => {
    const id = req.params.id;

    Categoria.findById(id, (err, categoriaEncontrado) => {
        if(err) {
            res.status(500).send(err); 
        }
        else if(categoriaEncontrado) {
            return res.json(categoriaEncontrado);
        }
        else {
            return res.status(404).json(
                { Erro: "Categoria nao encontrada" }
            )
        }
    
    })
}

exports.atualizar = (req, res) => {
    const id = req.params.id;
    const categoriaRequest = req.body;

    if(!categoriaRequest || !categoriaRequest.nome ) {
        return res.status(400).json({
            Erro:"Nome e obrigatorio"
        });    
    }

    Categoria.findByIdAndUpdate(id, categoriaRequest, {new: true}, 
        (err, categoriaAtualizado) => {
            if(err) {
                res.status(500).send(err)
            }
            else if(categoriaAtualizado) {
                return res.json(categoriaAtualizado);
            }
            else {
                return res.status(404).json(
                    { Erro: "Categoria nao encontrada" }
                )
            }
        })
    }

exports.deletar = (req, res) => {
    const id = req.params.id;

    Categoria.findByIdAndDelete(id, (err, categoriaDeletado) => {
        if(err) {
            return res.status(500).send(err);
        }
        else if(categoriaDeletado) {
            return res.json(categoriaDeletado);
        }
        else {
            return res.status(404).json(
                { Erro: "Categoria nao encontrada" }
            )    
        }
    })    
}
