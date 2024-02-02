 /* const detalle_mensaje_personalizado = (sequelize, type) => {
    return sequelize.define('detalle_mensaje_personalizados', {
        id_detalle_mensaje_personalizado: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        hora_mensaje: type.STRING,
    
        crearDetalle_mensaje_personalizado:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarDetalle_mensaje_personalizado: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = detalle_mensaje_personalizado */