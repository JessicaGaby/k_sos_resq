const detalle_familiar = (sequelize, type) => {
    return sequelize.define('detalle_familiares', {
        id_detalle_familiar: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        telefono: type.STRING,
    

        crearDetalle_familiar:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarDetalle_familiar: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = detalle_familiar