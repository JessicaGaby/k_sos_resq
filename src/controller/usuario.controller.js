const usuarioCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

usuarioCtl.mostrar = (req, res) => {
    res.render('usuario/agregar');
}

//mandar
usuarioCtl.mandar = async (req, res) => {
    const id =req.id_usuario  //ojo
    const { nombres,apellidos,correoelectronico,contrasena,fecha_registro,fecha_nacimiento,contactos_emergencia, estado } = req.body
    const nuevoEnvio = {
        nombres,
        apellidos,
        correoelectronico,
        contrasena,
        fecha_registro,
        fecha_nacimiento,
        //detalle
        contactos_emergencia,
        estado
        
    }
    await orm.usuario.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/usuario/listar/')
}

usuarioCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from usuarios')
    res.render('usuario/listar', { lista })
}

//traer datos
usuarioCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from usuarios where id_usuario =?', [ids])
    res.render('usuario/editar', { lista })
}

usuarioCtl.actualizar = async (req, res) => {
    const ids = req.params.id
    const { nombres,apellidos,correoelectronico,contrasena,fecha_registro,fecha_nacimiento,contactos_emergencia,estado } = req.body
    const nuevoEnvio = {
        nombres,
        apellidos,
        correoelectronico,
        contrasena,
        fecha_registro,
        fecha_nacimiento,
        //detalle
        contactos_emergencia,
        estado
    }
    await orm.usuario.findOne({ where: { id_usuario: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/usuario/listar/');
}
usuarioCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    await orm.usuario.destroy({ where: { id_usuario: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/usuario/listar/');
        })
}


module.exports = usuarioCtl