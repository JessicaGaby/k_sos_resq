const detalle_familiarCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

detalle_familiarCtl.mostrar = (req, res) => {
    res.render('detalle_familiares/agregar');
}

//mandar
detalle_familiarCtl.mandar = async (req, res) => {
    const id =req.id_detalle_familiar  //ojo
    const { telefono } = req.body
    const nuevoEnvio = {
        telefono
    }
    await orm.detalle_familiar.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/detalle_familiares/listar/')
}

detalle_familiarCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from detalle_familiares')
    res.render('detalle_familiar/listar', { lista })
}

//traer datos
detalle_familiarCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from detalle_familiares where id_detalle_familiar =?', [ids])
    res.render('detalle_familiares/editar', { lista })
}

detalle_familiarCtl.actualizar = async (req, res) => {
    const ids = req.params.id
    const { telefono } = req.body
    const nuevoEnvio = {
        telefono
    }
    await orm.detalle_familiar.findOne({ where: { id_detalle_familiar: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/detalle_familiares/listar/');
}
detalle_familiarCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    await orm.detalle_familiar.destroy({ where: { id_detalle_familiar: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/detalle_familiares/listar/');
        })
}


module.exports = detalle_familiarCtl