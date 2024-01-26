const objetoCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

objetoCtl.mostrar = (req, res) => {
    res.render('objetos/agregar');
}

//mandar
objetoCtl.mandar = async (req, res) => {
    const id =req.id_objeto  //ojo
    const { marca,modelo,numero_serie,numero_de_contacto,correo_electronico } = req.body
    const nuevoEnvio = {
        marca,
        modelo,
        numero_serie,
        numero_de_contacto,
        correo_electronico
    }
    await orm.objeto.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/objetos/listar/')
}

objetoCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from objetos')
    res.render('objeto/listar', { lista })
}

//traer datos
objetoCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from objetos where id_objeto =?', [ids])
    res.render('objetos/editar', { lista })
}

objetoCtl.actualizar = async (req, res) => {
    const ids = req.params.id
    const { marca,modelo,numero_serie,numero_de_contacto,correo_electronico } = req.body
    const nuevoEnvio = {
        marca,
        modelo,
        numero_serie,
        numero_de_contacto,
        correo_electronico
    }
    await orm.objeto.findOne({ where: { id_objeto: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/objetos/listar/');
}
objetoCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    await orm.objeto.destroy({ where: { id_objeto: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/objetos/listar/');
        })
}


module.exports = objetoCtl