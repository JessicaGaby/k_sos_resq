const mascotaCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

mascotaCtl.mostrar = (req, res) => {
    res.render('mascotas/agregar');
}

//mandar
mascotaCtl.mandar = async (req, res) => {
    const id =req.id_mascota  //ojo
    const { nombre_mascota,especie,raza,altura,peso } = req.body
    const nuevoEnvio = {
        nombre_mascota,
        especie,
        raza,
        altura,
        peso
    }
    await orm.mascota.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/mascotas/listar/')
}

mascotaCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from mascotas')
    res.render('mascota/listar', { lista })
}

//traer datos
mascotaCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from mascotas where id_mascota =?', [ids])
    res.render('mascotas/editar', { lista })
}

mascotaCtl.actualizar = async (req, res) => {
    const ids = req.params.id
    const { nombre_mascota,especie,raza,altura,peso } = req.body
    const nuevoEnvio = {
        nombre_mascota,
        especie,
        raza,
        altura,
        peso
    }
    await orm.mascota.findOne({ where: { id_mascota: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/mascotas/listar/');
}
mascotaCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    await orm.mascota.destroy({ where: { id_mascota: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/mascotas/listar/');
        })
}


module.exports = mascotaCtl