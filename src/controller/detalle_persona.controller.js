/*const detalle_personaCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

detalle_personaCtl.mostrar = (req, res) => {
    res.render('detalle_persona/agregar');
}

//mandar
detalle_personaCtl.mandar = async (req, res) => {
    const id =req.id_detalle_persona  //ojo
    const { numero_persona } = req.body
    const nuevoEnvio = {
        numero_persona
    }
    await orm.detalle_persona.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/detalle_persona/listar/')
}

detalle_personaCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from detalle_personas')
    res.render('detalle_persona/listar', { lista })
}

//traer datos
detalle_personaCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from detalle_personas where id_detalle_persona =?', [ids])
    res.render('detalle_persona/editar', { lista })
}

detalle_personaCtl.actualizar = async (req, res) => {
    const ids = req.params.id
    const { numero_persona } = req.body
    const nuevoEnvio = {
        numero_persona
    }
    await orm.detalle_persona.findOne({ where: { id_detalle_persona: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/detalle_persona/listar/');
}
detalle_personaCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    await orm.detalle_persona.destroy({ where: { id_detalle_persona: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/detalle_persona/listar/');
        })
}


module.exports = detalle_personaCtl */