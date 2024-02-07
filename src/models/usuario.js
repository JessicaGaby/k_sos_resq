const usuario = (sequelize, type) => {
    return sequelize.define('usuarios', {
        id_usuario: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombres: type.STRING, 
        apellidos: type.STRING,
        correoelectronico: type.STRING,
        contrasena: type.STRING,
        fecha_nacimiento: type.STRING,
        //detalle 
        contactos_emergencia: type.STRING,
    
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