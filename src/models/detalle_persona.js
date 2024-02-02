/* const detalle_persona = (sequelize, type) => {
    return sequelize.define('detalle_personas', {
        id_detalle_persona: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        numero_persona: type.STRING,
    

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
module.exports = detalle_persona */