const detalle_objeto = (sequelize, type) => {
    return sequelize.define('detalle_objetos', {
        id_detalle_objeto: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fecha_perdida: type.STRING,
        hora_perdida: type.STRING,
        ubicacion_perdida: type.STRING,
        color: type.STRING,

    

        crearDetalle_objetos:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarDetalle_objetos: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = detalle_objeto