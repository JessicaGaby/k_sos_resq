/*const detalle_historial = (sequelize, type) => {
    return sequelize.define('detalle_historiales', {
        id_detalle_historial: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        hora_activacion: type.STRING,
        ubicacion: type.STRING,
        
    

        crearDetalle_historial:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarDetalle_historial: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = detalle_historial*/