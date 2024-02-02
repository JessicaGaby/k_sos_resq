/*const detalle_objetoCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

detalle_objetoCtl.mostrar = (req, res) => {
    res.render('detalle_objeto/agregar');
}

//mandar
detalle_objetoCtl.mandar = async (req, res) => {
    const id =req.id_detalle_objeto  //ojo
    const { fecha_perdida,hora_perdida,ubicacion_perdida,color } = req.body
    const nuevoEnvio = {
        fecha_perdida,
        hora_perdida,
        ubicacion_perdida,
        color
    }
    await orm.detalle_objeto.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/detalle_objeto/listar/')
}

detalle_objetoCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from detalle_objetos')
    res.render('detalle_objeto/listar', { lista })
}

//traer datos
detalle_objetoCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from detalle_objetos where id_detalle_objeto =?', [ids])
    res.render('detalle_objeto/editar', { lista })
}

detalle_objetoCtl.actualizar = async (req, res) => {
    const ids = req.params.id
    const { fecha_perdida,hora_perdida,ubicacion_perdida,color } = req.body
    const nuevoEnvio = {
        fecha_perdida,
        hora_perdida,
        ubicacion_perdida,
        color
    }
    await orm.detalle_objeto.findOne({ where: { id_detalle_objeto: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/detalle_objeto/listar/');
}
detalle_objetoCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    await orm.detalle_objeto.destroy({ where: { id_detalle_objeto: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/detalle_objeto/listar/');
        })
}


module.exports = detalle_objetoCtl*/