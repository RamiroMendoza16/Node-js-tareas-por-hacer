const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('borrar', 'Borra un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'actualiza el estado por hacer de una tarea', {
        descripcion,
        completado
    })
    .help()
    .argv;


module.exports = {
    argv
}