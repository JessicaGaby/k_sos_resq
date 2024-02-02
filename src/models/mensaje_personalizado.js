const mensaje_personalizado = (sequelize, type) => {
    return sequelize.define('mensaje_personalizados', {
        id_mensaje_personalizado: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        mensaje: type.STRING,
        descripcion: type.STRING,
        fecha_mensaje: type.STRING,
        //detalle 
        hora_mensaje: type.STRING,
        
        crearMensaje_personalizado:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarMensaje_personalizado: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = mensaje_personalizado