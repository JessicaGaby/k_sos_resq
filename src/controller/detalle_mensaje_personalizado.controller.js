/* const detalle_mensaje_personalizadoCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

detalle_mensaje_personalizadoCtl.mostrar = (req, res) => {
    res.render('detalle_mensaje_personalizados/agregar');
}

//mandar
detalle_mensaje_personalizadoCtl.mandar = async (req, res) => {
    const id =req.id_detalle_mensaje_personalizado  //ojo
    const { hora_mensaje } = req.body
    const nuevoEnvio = {
        hora_mensaje
    }
    await orm.detalle_mensaje_personalizado.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/detalle_mensaje_personalizados/listar/')
}

detalle_mensaje_personalizadoCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from detalle_mensaje_personalizados')
    res.render('detalle_mensaje_personalizado/listar', { lista })
}

//traer datos
detalle_mensaje_personalizadoCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from detalle_mensaje_personalizados where id_detalle_mensaje_personalizado =?', [ids])
    res.render('detalle_mensaje_personalizados/editar', { lista })
}

detalle_mensaje_personalizadoCtl.actualizar = async (req, res) => {
    const ids = req.params.id
    const { hora_mensaje } = req.body
    const nuevoEnvio = {
        hora_mensaje
    }
    await orm.detalle_mensaje_personalizado.findOne({ where: { id_detalle_mensaje_personalizado: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/detalle_mensaje_personalizados/listar/');
}
detalle_mensaje_personalizadoCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    await orm.detalle_mensaje_personalizado.destroy({ where: { id_detalle_mensaje_personalizado: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/detalle_mensaje_personalizados/listar/');
        })
}


module.exports = detalle_mensaje_personalizadoCtl */