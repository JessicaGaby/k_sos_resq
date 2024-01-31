const usuario = (sequelize, type) => {
    return sequelize.define('usuarios', {
        id_usuario: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombres: type.STRING, 
        apellidos: type.STRING,
        correo_electronico: type.STRING,
        contrasena: type.STRING,
        fecha_registro: type.STRING,
        fecha_nacimiento: type.STRING,
    
        crearUsuario:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarUsuario: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = usuario