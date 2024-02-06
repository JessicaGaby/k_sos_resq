const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
// const path = require("path");
// const CryptoJS = require("crypto-js");
const orm = require("../Database/dataBase.orm")
// const request = require('request');
// const fs = require('fs');
const sql = require("../Database/dataBase.sql");
const helpers = require("./helpers");

//INICIO DE SESION
passport.use(
    "local.signin",
    new LocalStrategy(
        {
            usernameField: "correoelectronico",
            passwordField: "contrasena",
            passReqToCallback: true,
        },
        async (req, correoelectronico, contrasena, done) => {
            const rows = await orm.usuario.findOne({ where: { correoelectronico: correoelectronico } });
            if (rows) {
                const user = rows;
                const validPassword = await helpers.matchPassword(
                    contrasena,
                    user.contrasena
                )
                if (validPassword) {
                    done(
                        null,
                        user,
                        req.flash(
                            "message",
                            "Bienvenido" + " " + user.correoelectronico
                        )
                    );
                } else {
                    done(null, false, req.flash("message", "Datos incorrectos"));
                }
            } else {
                return done(
                    null,
                    false,
                    req.flash("message", "El nombre de usuario no existe.")
                );
            }
        }
    )
);
//REGISTRO
passport.use(
    "local.signup",
    new LocalStrategy(
        {
            usernameField: "correoelectronico",
            passwordField: "contrasena",
            passReqToCallback: true,
        },
        async (req,  correoelectronico, contrasena, done) => {
            const usuarios = await orm.usuario.findOne({ where: {  correoelectronico:correoelectronico} });
            if (usuarios === null) {
                const { nombres, apellidos, correoelectronico, contrasena, fecha_registro, fecha_nacimiento, contactos_emergencia, estado } = req.body;
                let nuevoUsuario = {
                    ///
                    nombres,
                    apellidos,
                    correoelectronico,
                    contrasena,
                    fecha_registro,
                    fecha_nacimiento,
                    contactos_emergencia,
                    estado
                };
                nuevoUsuario.contrasena = await helpers.encryptPassword(contrasena);
                const resultado = await orm.usuario.create(nuevoUsuario);
                nuevoUsuario.id = resultado.insertId;
                return done(null, nuevoUsuario)

            } else {
                if (usuarios) {
                    const usuario = usuarios;
                    if (username == usuario.nombres) {
                        done(null, false, req.flash("message", "El nombre de usuario ya existe."));
                    } else {
                        let nuevoUsuario = {
                            correoelectronico,
                            contrasena
                        };
                        nuevoUsuario.password_usuario = await helpers.encryptPassword(contrasena);
                        const resultado = await orm.usuario.create(nuevoUsuario);
                        nuevoUsuario.id = resultado.insertId;
                        return done(null, nuevoUsuario);
                    }
                }
            }
        }
    )
);               

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});