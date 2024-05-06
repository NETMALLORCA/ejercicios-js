(() => {

    const curso = {
        nombre: "Introducción a JavaScript",
        estudiantes: [
            { nombre: "Juan", nota: 4.7 },
            { nombre: "Ana", nota: 5.5 },
            { nombre: "Pedro", nota: 3.3 }
        ]
    };
    console.log 
    let alumno = curso.estudiantes[1]

    if(alumno.nota > 5){
        console.log("has aprobado")
    }else{
        console.log("has suspendido")

    }
})()