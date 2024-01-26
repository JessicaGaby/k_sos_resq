const mascota = (sequelize, type) => {
    return sequelize.define('mascotas', {
        id_mascota: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_mascota: type.STRING,
        especie: type.STRING,
        raza: type.STRING,
        altura: type.STRING,
        peso: type.STRING,
    

        crearMascota:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarMascota: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = mascota