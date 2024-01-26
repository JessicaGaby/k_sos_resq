const personaCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

personaCtl.mostrar = (req, res) => {
    res.render('personas/agregar');
}

//mandar
personaCtl.mandar = async (req, res) => {
    const id =req.id_persona  //ojo
    const { nombres, apellidos,fecha_nacimiento, sex, direccion, correo_electronico } = req.body
    const nuevoEnvio = {
        nombres, 
        apellidos,
        fecha_nacimiento, 
        sex, 
        direccion, 
        correo_electronico
    }
    await orm.persona.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/personas/listar/')
}

personaCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from personas')
    res.render('persona/listar', { lista })
}

//traer datos
personaCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from personas where id_persona =?', [ids])
    res.render('personas/editar', { lista })
}

personaCtl.actualizar = async (req, res) => {
    const ids = req.params.id
    const { nombres, apellidos,fecha_nacimiento, sex, direccion, correo_electronico } = req.body
    const nuevoEnvio = {
        nombres, 
        apellidos,
        fecha_nacimiento, 
        sex, 
        direccion, 
        correo_electronico
    }
    await orm.persona.findOne({ where: { id_persona: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/personas/listar/');
}
personaCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    await orm.persona.destroy({ where: { id_persona: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/personas/listar/');
        })
}


module.exports = personaCtl