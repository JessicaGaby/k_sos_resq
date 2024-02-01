const detalle_mascota = (sequelize, type) => {
    return sequelize.define('detalle_mascotas', {
        id_detalle_mascota: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        numero_telefonico: type.STRING,
        medicamentos: type.STRING,
        direccion_mascota: type.STRING,
        fecha_vacuna: type.STRING,
        nombre_propietario: type.STRING,
    

        crearDetalle_mascota:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarDetalle_mascota: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = detalle_mascota