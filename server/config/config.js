// ==================
// PUERTO
// ==================

process.env.PORT = process.env.PORT || 3000;

// ==================
// Entorno
// ==================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ==================
// Base de datos
// ==================

let urlBD;
if (process.env.NODE_ENV === 'dev') {
    urlBD = 'mongodb://localhost:27017/cafe';
} else {
    urlBD = 'mongodb://unico-prova:Gaetano1979@ds145573.mlab.com:45573/unico';
}
process.env.URLDB = urlBD;