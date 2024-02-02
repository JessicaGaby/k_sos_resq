const registro_familiar = (sequelize, type) => {
    return sequelize.define('registro_familiares', {
        id_registro_familiar: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombres: type.STRING,
        apellidos: type.STRING,
        correo_electronico: type.STRING,
        //detalle_familiar
        telefono: type.STRING,

    

        crearRegistro_familiar:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarRegistros_familiar: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = registro_familiar