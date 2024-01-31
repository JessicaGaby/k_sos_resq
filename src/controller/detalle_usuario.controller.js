const detalle_usuarioCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

detalle_usuarioCtl.mostrar = (req, res) => {
    res.render('detalle_usuarios/agregar');
}

//mandar
detalle_usuarioCtl.mandar = async (req, res) => {
    const id =req.id_detalle_usuario  //ojo
    const { nombre_detalle_usuario,contactos_emergencia, estado} = req.body
    const nuevoEnvio = {
        nombre_detalle_usuario,
        contactos_emergencia,
        estado
    }
    await orm.detalle_usuario.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/detalle_usuarios/listar/')
}

detalle_usuarioCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from detalle_usuarios')
    res.render('detalle_usuario/listar', { lista })
}

//traer datos
detalle_usuarioCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from detalle_usuarios where id_detalle_usuario =?', [ids])
    res.render('detalle_usuarios/editar', { lista })
}

detalle_usuarioCtl.actualizar = async (req, res) => {
    const ids = req.params.id
    const { nombre_detalle_usuario,contactos_emergencia, estado} = req.body
    const nuevoEnvio = {
        nombre_detalle_usuario,
        contactos_emergencia,
        estado
    }
    await orm.detalle_usuario.findOne({ where: { id_detalle_usuario: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/detalle_usuarios/listar/');
}
detalle_usuarioCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    await orm.detalle_usuario.destroy({ where: { id_detalle_usuario: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/detalle_usuarios/listar/');
        })
}


module.exports = detalle_usuarioCtl