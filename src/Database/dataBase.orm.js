const { Sequelize } = require("sequelize");
const { MYSQLHOST, MYSQLUSER, MYSQLPASSWORD, MYSQLDATABASE, MYSQLPORT, MYSQL_URI } = require("../keys");

let sequelize;

// Usar URI de conexión si está disponible  jessica
if (MYSQL_URI) {
    sequelize = new Sequelize(MYSQL_URI);
} else {
    // Configuración para parámetros individuales
    sequelize = new Sequelize(MYSQLDATABASE, MYSQLUSER, MYSQLPASSWORD, {
        host: MYSQLHOST,
        port: MYSQLPORT,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 1,
            acquire: 30000,
            idle: 10000
        }
    });
}

// Autenticar y sincronizar
sequelize.authenticate()
    .then(() => {
        console.log("Conexión establecida con la base de datos");
    })
    .catch((err) => {
        console.error("No se pudo conectar a la base de datos:", err.message);
    });

sequelize.sync({ force: false })
    .then(() => {
        console.log("Tablas sincronizadas");
    })
    .catch((err) => {
        console.error("Error al sincronizar las tablas:", err.message);
    });


    const usuarioModel = require('../models/usuario');
    const registroFamiliarModel = require('../models/registro_familiar')    
    const personaModel = require('../models/persona');
    const objetoModel = require('../models/objeto');
    const mensajePersonalizadoModel = require('../models/mensaje_personalizado');
    const mascotaModel = require('../models/mascota');
    const historialActivacionModel = require('../models/historial_activacion');
    const detalleUsuarioModel = require('../models/detalle_usuario');
    const detallePersonaModel = require('../models/detalle_persona');
    const detalleObjetoModel = require('../models/detalle_objeto');
    const detalleMensajePersonalizadoModel = require('../models/detalle_mensaje_personalizado');
    const detalleMascotaModel = require('../models/detalle_mascota');
    const detalleHistorialModel = require('../models/detalle_historial');
    const detalleFamiliarModel = require('../models/detalle_familiar');

    

    // Sincronia
    const usuario = usuarioModel(sequelize, Sequelize)
    const registro_familiar = registroFamiliarModel(sequelize,Sequelize)
    const persona = personaModel(sequelize, Sequelize)
    const objeto = objetoModel(sequelize, Sequelize)
    const mensaje_personalizado =mensajePersonalizadoModel(sequelize, Sequelize)
    const mascota = mascotaModel (sequelize, Sequelize)
    const historial_activacion = historialActivacionModel (sequelize, Sequelize)
    const detalle_usuario = detalleUsuarioModel(sequelize, Sequelize)
    const detalle_persona = detallePersonaModel(sequelize, Sequelize)
    const detalle_objeto = detalleObjetoModel(sequelize, Sequelize)
    const detalle_mensaje_personalizado = detalleMensajePersonalizadoModel(sequelize, Sequelize)
    const detalle_mascota = detalleMascotaModel(sequelize, Sequelize)
    const detalle_historial = detalleHistorialModel(sequelize, Sequelize)
    const detalle_familiar = detalleFamiliarModel(sequelize, Sequelize)

    //relaciones

    
    //usuario
    usuario.hasMany(detalle_usuario)
    detalle_usuario.belongsTo(usuario)

    usuario.hasMany(historial_activacion)
    historial_activacion.belongsTo(usuario) 
    
    usuario.hasMany(registro_familiar)
    registro_familiar.belongsTo(usuario)

    registro_familiar.hasMany(detalle_familiar)
    detalle_familiar.belongsTo(registro_familiar)


    //MASCOTA
    mascota.hasMany(detalle_mascota)
    detalle_mascota.belongsTo(mascota)

    mascota.hasMany(historial_activacion)
    historial_activacion.belongsTo(mascota)

    
    historial_activacion.hasMany(detalle_historial)
    detalle_historial.belongsTo(historial_activacion)
    
    //PERSONA
    persona.hasMany(detalle_persona)
    detalle_persona.belongsTo(persona)

    persona.hasMany(historial_activacion)
    historial_activacion.belongsTo(persona)

    //OBJETOS
    objeto.hasMany(detalle_objeto)
    detalle_objeto.belongsTo(objeto)

    objeto.hasMany(historial_activacion)
    historial_activacion.belongsTo(objeto)

    mensaje_personalizado.hasMany(detalle_mensaje_personalizado)
    detalle_mensaje_personalizado.belongsTo(mensaje_personalizado)

    mensaje_personalizado.hasMany(historial_activacion)
    historial_activacion.belongsTo(mensaje_personalizado)
    
// Exportar el objeto sequelize
module.exports = {
    usuario,
    registro_familiar,
    persona,
    objeto,
    mensaje_personalizado,
    mascota,
    historial_activacion,
    detalle_usuario,
    detalle_persona,
    detalle_objeto,
    detalle_mensaje_personalizado,
    detalle_mascota,
    detalle_historial,
    detalle_familiar,
};