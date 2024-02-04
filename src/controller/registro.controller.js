const inicioCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')


inicioCtl.Mostrar = (req, res) => {
    res.render('registro');
}

inicioCtl.mandar = async(req, res)=>{
    const { mensaje, descripcion} = req.body
    const nuevoEvio ={
        mensaje,
        descripcion
    }
    await orm.inicio.create(nuevoEvio)
    req.flash('success', 'Guardado con exito')
    res.redirect('/registro');
}
module.exports  = inicioCtl