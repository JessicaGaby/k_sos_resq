const detalle_historialCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

detalle_historialCtl.mostrar = (req, res) => {
    res.render('detalle_historiales/agregar');
}

//mandar
detalle_historialCtl.mandar = async (req, res) => {
    const id =req.id_detalle_historial  //ojo
    const { hora_activacion, ubicacion } = req.body
    const nuevoEnvio = {
        hora_activacion, 
        ubicacion
    }
    await orm.detalle_historial.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/detalle_historiales/listar/')
}

detalle_historialCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from detalle_historiales')
    res.render('detalle_historial/listar', { lista })
}

//traer datos
detalle_historialCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from detalle_historiales where id_detalle_historial =?', [ids])
    res.render('detalle_historiales/editar', { lista })
}

detalle_historialCtl.actualizar = async (req, res) => {
    const ids = req.params.id
    const {hora_activacion, ubicacion } = req.body
    const nuevoEnvio = {
        hora_activacion,
        ubicacion
    }
    await orm.detalle_historial.findOne({ where: { id_detalle_historial: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/detalle_historiales/listar/');
}
detalle_historialCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    await orm.detalle_historial.destroy({ where: { id_detalle_historial: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/detalle_historiales/listar/');
        })
}


module.exports = detalle_historialCtl