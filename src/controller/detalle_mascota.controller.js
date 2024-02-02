/*const detalle_mascotaCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

detalle_mascotaCtl.mostrar = (req, res) => {
    res.render('detalle_mascota/agregar');
}

//mandar
detalle_mascotaCtl.mandar = async (req, res) => {
    const id =req.id_detalle_mascota  //ojo
    const { numero_telefonico,medicamentos,direccion_mascota,fecha_vacuna,nombre_propietario } = req.body
    const nuevoEnvio = {
        numero_telefonico,
        medicamentos,
        direccion_mascota,
        fecha_vacuna,
        nombre_propietario
    }
    await orm.detalle_mascota.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/detalle_mascota/listar/')
}

detalle_mascotaCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from detalle_mascotas')
    res.render('detalle_mascota/listar', { lista })
}

//traer datos
detalle_mascotaCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from detalle_mascotas where id_detalle_mascota =?', [ids])
    res.render('detalle_mascota/editar', { lista })
}

detalle_mascotaCtl.actualizar = async (req, res) => {
    const ids = req.params.id
    const { numero_telefonico,medicamentos,direccion_mascota,fecha_vacuna,nombre_propietario } = req.body
    const nuevoEnvio = {
        numero_telefonico,
        medicamentos,
        direccion_mascota,
        fecha_vacuna,
        nombre_propietario
    }
    await orm.detalle_mascota.findOne({ where: { id_detalle_mascota: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/detalle_mascota/listar/');
}
detalle_mascotaCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    await orm.detalle_mascota.destroy({ where: { id_detalle_mascota: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/detalle_mascota/listar/');
        })
}


module.exports = detalle_mascotaCtl*/