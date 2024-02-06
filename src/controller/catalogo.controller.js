const catalogoCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')


catalogoCtl.Mostrar = (req, res) => {
    res.render('catalogo');
}

catalogoCtl.mandar = async(req, res)=>{
    const { mensaje, descripcion} = req.body
    const nuevoEvio ={
        mensaje,
        descripcion
    }
    await orm.inicio.create(nuevoEvio)
    req.flash('success', 'Guardado con exito')
    res.redirect('/catalogo');
}
module.exports  = catalogoCtl