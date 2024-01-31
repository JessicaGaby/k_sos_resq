const personaCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

personaCtl.mostrar = (req, res) => {
    res.render('persona/agregar');
}

//mandar
personaCtl.mandar = async (req, res) => {
    const id =req.id_persona  //ojo
    const { nombres, apellidos,fecha_nacimiento, sex, direccion, correo_persona } = req.body
    const nuevoEnvio = {
        nombres, 
        apellidos,
        fecha_nacimiento, 
        sex, 
        direccion, 
        correo_persona
    }
    await orm.persona.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/persona/listar/')
}

personaCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from personas')
    res.render('persona/listar', { lista })
}

//traer datos
personaCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from personas where id_persona =?', [ids])
    res.render('persona/editar', { lista })
}

personaCtl.actualizar = async (req, res) => {
    const ids = req.params.id
    const { nombres, apellidos,fecha_nacimiento, sex, direccion, correo_persona } = req.body
    const nuevoEnvio = {
        nombres, 
        apellidos,
        fecha_nacimiento, 
        sex, 
        direccion, 
        correo_persona
    }
    await orm.persona.findOne({ where: { id_persona: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/persona/listar/');
}
personaCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    await orm.persona.destroy({ where: { id_persona: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/persona/listar/');
        })
}


module.exports = personaCtl