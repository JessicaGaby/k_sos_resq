const historial_activacion = (sequelize, type) => {
    return sequelize.define('historial_activaciones', {
        id_historial_activacion: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fecha_activacion: type.STRING,
        
    

        crearHistorial_activacion:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarHistorial_activacion: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = historial_activacion