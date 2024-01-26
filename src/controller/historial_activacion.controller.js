const historial_activacionCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

historial_activacionCtl.mostrar = (req, res) => {
    res.render('historial_activaciones/agregar');
}

//mandar
historial_activacionCtl.mandar = async (req, res) => {
    const id =req.id_historial_activacion  //ojo
    const { fecha_activacion } = req.body
    const nuevoEnvio = {
        fecha_activacion
    }
    await orm.historial_activacion.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/historial_activaciones/listar/')
}

historial_activacionCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from historial_activaciones')
    res.render('historial_activacion/listar', { lista })
}

//traer datos
historial_activacionCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from historial_activaciones where id_historial_activacion =?', [ids])
    res.render('historial_activaciones/editar', { lista })
}

historial_activacionCtl.actualizar = async (req, res) => {
    const ids = req.params.id
    const { fecha_activacion } = req.body
    const nuevoEnvio = {
        fecha_activacion
    }
    await orm.historial_activacion.findOne({ where: { id_historial_activacion: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/historial_activaciones/listar/');
}
historial_activacionCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    await orm.historial_activacion.destroy({ where: { id_historial_activacion: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/historial_activaciones/listar/');
        })
}


module.exports = historial_activacionCtl