const argv = require('./config/yargs').argv;

const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer')

console.log(argv);

let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getLista();
        for (let tarea of listado) {
            console.log('=======Por hacer======'.green);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log('======================'.green);
        }
        break;

    case 'actualizar':
        let actualizada = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizada);
        break;

    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break;

    default:
        console.log(`${comando} no se encontro`);
        break;
}