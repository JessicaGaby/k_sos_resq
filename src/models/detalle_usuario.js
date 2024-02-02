 /* const detalle_usuario = (sequelize, type) => {
    return sequelize.define('detalle_usuarios', {
        id_detalle_usuario: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        contactos_emergencia: type.STRING,
        estado: type.STRING,
    

        crearDetalle_usuario:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarDetalle_usuario: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = detalle_usuario */