const mensaje_personalizadoCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

mensaje_personalizadoCtl.mostrar = (req, res) => {
    res.render('mensaje_personalizado/agregar');
}

//mandar
mensaje_personalizadoCtl.mandar = async (req, res) => {
    const id =req.id_mensaje_personalizado  //ojo
    const { mensaje, descripcion, fecha_mensaje } = req.body
    const nuevoEnvio = {
        mensaje, 
        descripcion, 
        fecha_mensaje
    }
    await orm.mensaje_personalizado.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/mensaje_personalizado/listar/')
}

mensaje_personalizadoCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from mensaje_personalizados')
    res.render('mensaje_personalizado/listar', { lista })
}

//traer datos
mensaje_personalizadoCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from mensaje_personalizados where id_mensaje_personalizado =?', [ids])
    res.render('mensaje_personalizado/editar', { lista })
}

mensaje_personalizadoCtl.actualizar = async (req, res) => {
    const ids = req.params.id
    const { mensaje, descripcion, fecha_mensaje } = req.body
    const nuevoEnvio = {
        mensaje, 
        descripcion, 
        fecha_mensaje
    }
    await orm.mensaje_personalizado.findOne({ where: { id_mensaje_personalizado: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/mensaje_personalizado/listar/');
}
mensaje_personalizadoCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    await orm.mensaje_personalizado.destroy({ where: { id_mensaje_personalizado: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/mensaje_personalizado/listar/');
        })
}


module.exports = mensaje_personalizadoCtl