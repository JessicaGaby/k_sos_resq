const persona = (sequelize, type) => {
    return sequelize.define('personas', {
        id_persona: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombres: type.STRING,
        apellidos: type.STRING,
        fecha_nacimiento: type.STRING,
        sex: type.STRING,
        direccion: type.STRING,
        correo_persona: type.STRING,
    

        crearPersona:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarPersona: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = persona