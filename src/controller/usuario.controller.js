const usuarioCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

usuarioCtl.mostrar = (req, res) => {
    res.render('usuarios/agregar');
}

//mandar
usuarioCtl.mandar = async (req, res) => {
    const id =req.id_usuario  //ojo
    const { nombres,apellidos,correo_electronico,contrasena,fecha_registro,fecha_nacimiento,contactos_emergencia } = req.body
    const nuevoEnvio = {
        nombres,
        apellidos,
        correo_electronico,
        contrasena,
        fecha_registro,
        fecha_nacimiento,
        contactos_emergencia
    }
    await orm.usuario.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/usuarios/listar/')
}

usuarioCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from usuarios')
    res.render('usuario/listar', { lista })
}

//traer datos
usuarioCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from usuarios where id_usuario =?', [ids])
    res.render('usuarios/editar', { lista })
}

usuarioCtl.actualizar = async (req, res) => {
    const ids = req.params.id
    const { nombres,apellidos,correo_electronico,contrasena,fecha_registro,fecha_nacimiento,contactos_emergencia } = req.body
    const nuevoEnvio = {
        nombres,
        apellidos,
        correo_electronico,
        contrasena,
        fecha_registro,
        fecha_nacimiento,
        contactos_emergencia
    }
    await orm.usuario.findOne({ where: { id_usuario: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/usuarios/listar/');
}
usuarioCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    await orm.usuario.destroy({ where: { id_usuario: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/usuarios/listar/');
        })
}


module.exports = usuarioCtl