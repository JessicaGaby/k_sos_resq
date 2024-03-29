// Importar módulos necesarios
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const MySQLStore = require('express-mysql-session')(session);
const bodyparser = require('body-parser');
const fileUpload = require("express-fileupload");
const helmet = require('helmet');

// Importar módulos locales
const { MYSQLHOST, MYSQLUSER, MYSQLPASSWORD, MYSQLDATABASE, MYSQLPORT } = require("./keys");
require('./lib/passport');

// Crear aplicación Express
const app = express();

// Configurar almacenamiento de sesiones
const options = {
    host: MYSQLHOST,
    port: MYSQLPORT,
    user: MYSQLUSER,
    password: MYSQLPASSWORD,
    database: MYSQLDATABASE,
    createDatabaseTable: true
};
const sessionStore = new MySQLStore(options);

// Configurar Handlebars
const handlebars = exphbs.create({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    extname: '.hbs',
    helpres: require('./lib/handlebars')
});

// Configurar motor de vistas
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

// Configurar middleware
app.use(fileUpload({ createParentPath: true }));
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production', // Configura según tus necesidades
        httpOnly: true,
        sameSite: 'Lax' // O 'Strict' dependiendo de tus necesidades de seguridad
    }
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Middleware de manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error interno del servidor');
});

// Configurar variables globales
app.use((req, res, next) => {
    app.locals.message = req.flash('message');
    app.locals.success = req.flash('success');
    app.locals.user = req.user;
    next();
});

app.use(helmet());

// Configurar archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas - Definir tus rutas aquí

app.use(require('./router/inicio.router'))
app.use(require('./router/catalogo.router'))
//app.use(require('./router/login.router'))
app.use(require('./router/registro.router'))
app.use('/objeto',require('./router/objeto.router'))
app.use('/registro_familiar', require('./router/registro_familiar.router'))
app.use('/persona', require('./router/persona.router'))
app.use('/mensaje_personalizado', require('./router/mensaje_personalizado.router'))
//app.use('/detalle_usuario', require('./router/detalle_usuario.router'))
app.use('/mascota', require('./router/mascota.router'))
//app.use('/detalle_persona', require('./router/detalle_persona.router'))
//app.use('/detalle_objeto', require('./router/detalle_objeto.router'))
//app.use('/detalle_mascota', require('./router/detalle_mascota.router'))
//app.use('/detalle_familiar', require('./router/detalle_familiar.router'))
app.use('/usuario', require('./router/usuario.router'))
app.use('/historial_activacion', require('./router/historial_activacion.router'))

// Exportar la aplicación
module.exports = app;