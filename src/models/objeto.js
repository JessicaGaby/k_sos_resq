const objeto = (sequelize, type) => {
    return sequelize.define('objetos', {
        id_objeto: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        marca: type.STRING,
        modelo: type.STRING,
        numero_serie: type.STRING,
        numero_contacto: type.STRING,
        correo_objeto:type.STRING,
        //detalle
        fecha_perdida: type.STRING,
        hora_perdida: type.STRING,
        ubicacion_perdida: type.STRING,
        color: type.STRING,

    

        crearObjeto:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarObjeto: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = objeto