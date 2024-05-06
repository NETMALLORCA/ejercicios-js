(() => {
  const curso = {
    nombre: 'Introducción a JavaScript',
    estudiantes: [
      { nombre: 'Juan', nota: 4.7 },
      { nombre: 'Ana', nota: 5.5 },
      { nombre: 'Pedro', nota: 3.3 }
    ]
  }
  curso.estudiantes.forEach(estudiante => {
    if (estudiante.nota > 5) {
      console.log (`${estudiante.nombre} haz aprovado`)
    } else {
      console.log (`${estudiante.nombre} no haz aprovado`)
    }
  });
})()