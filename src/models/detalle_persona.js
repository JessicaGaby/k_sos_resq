const detalla_persona = (sequelize, type) => {
    return sequelize.define('detalles_personas', {
        id_detalle_persona: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombres: type.STRING,
        numero_telefonico: type.STRING,
    

        creardetalle_persona:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizardetalle_persona: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = detalla_persona