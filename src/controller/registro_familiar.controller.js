const registro_familiarCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

registro_familiarCtl.mostrar = (req, res) => {
    res.render('registro_familiares/agregar');
}

//mandar
registro_familiarCtl.mandar = async (req, res) => {
    const id =req.id_registro_familiar  //ojo
    const { nombres, apellidos, correo_electronico } = req.body
    const nuevoEnvio = {
        nombres,
        apellidos,
        correo_electronico
 
    }
    await orm.registro_familiar.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/registro_familiares/listar/')
}

registro_familiarCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from registro_familiares')
    res.render('registro_familiar/listar', { lista })
}

//traer datos
registro_familiarCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from registro_familiares where id_registro_familiar =?', [ids])
    res.render('registro_familiares/editar', { lista })
}

registro_familiarCtl.actualizar = async (req, res) => {
    const ids = req.params.id
    const { nombres, apellidos, correo_electronico } = req.body
    const nuevoEnvio = {
        nombres,
        apellidos,
        correo_electronico
    }
    await orm.registro_familiar.findOne({ where: { id_registro_familiar: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/registro_familiares/listar/');
}
registro_familiarCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    await orm.registro_familiar.destroy({ where: { id_registro_familiar: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/registro_familiares/listar/');
        })
}


module.exports = registro_familiarCtl