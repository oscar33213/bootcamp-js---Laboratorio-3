interface GrupoMusical {
    nombre: string;
    cantanteCompositor: string;
    anioFundacion: number;
    activo: boolean;
    genero: string;
}

// Definición de variables para cada género musical
const popRock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hardRock = "🤘 Hard Rock";
const clasica = "🎼 Clásica";

// Crear objetos para cada grupo musical
const theBeatles: GrupoMusical = {
    nombre: "\x1b[1m\x1b[32mThe Beatles\x1b[0m",
    cantanteCompositor: "John Lennon, Paul McCartney, George Harrison, Ringo Starr",
    anioFundacion: 1960,
    activo: true,
    genero: popRock
};

const queen: GrupoMusical = {
    nombre: "\x1b[1m\x1b[32mQueen\x1b[0m",
    cantanteCompositor: "Freddie Mercury",
    anioFundacion: 1970,
    activo: false,
    genero: rock
};

const acdc: GrupoMusical = {
    nombre: "\x1b[1m\x1b[32mAC DC\x1b[0m",
    cantanteCompositor: "Angus Young, Malcolm Young, Bon Scott, Brian Johnson",
    anioFundacion: 1973,
    activo: true,
    genero: hardRock
};

const beethoven: GrupoMusical = {
    nombre: "\x1b[1m\x1b[32mLudwig van Beethoven\x1b[0m",
    cantanteCompositor: "Ludwig van Beethoven",
    anioFundacion: 1770,
    activo: false,
    genero: clasica
};

const theRollingStones: GrupoMusical = {
    nombre: "\x1b[1m\x1b[32mThe Rolling Stones\x1b[0m",
    cantanteCompositor: "Mick Jagger, Keith Richards, Charlie Watts, Ronnie Wood",
    anioFundacion: 1962,
    activo: true,
    genero: rock
};

// Mostrar cada grupo por consola
function mostrarGrupo(grupo: GrupoMusical) {
    console.log(`Nombre del grupo: ${grupo.nombre}`);
    console.log(`Cantante/Compositor: ${grupo.cantanteCompositor}`);
    console.log(`Año de fundación: ${grupo.anioFundacion}`);
    console.log(`Activo: ${grupo.activo ? "Sí" : "No"}`);
    console.log(`Género musical: ${grupo.genero}`);
    console.log(); // Añadir una línea en blanco para separar los grupos
}

// Mostrar cada grupo
mostrarGrupo(theBeatles);
mostrarGrupo(queen);
mostrarGrupo(acdc);
mostrarGrupo(beethoven);
mostrarGrupo(theRollingStones);
