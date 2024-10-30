//OBJETIVO: RECOGER LOS DATOS DE UN FORMULARIO
//UTILIZANDO JS

//1. a cada input, select, textarea del form
//le creo una variable asociada al id del HTML
let nombreUsuario=document.getElementById("nombre")
let fechaNacimientoUsuario=document.getElementById("fechaNacimiento")
let ubicacionUsuario=document.getElementById("ubicacion")
let metaAhorroUsuario=document.getElementById("metaAhorro")

//2. se crea una variable para asociarla con el boton del formulario
let botonRegistro=document.getElementById("botonRegistro")

//3. Se detecta el clic del boton del formulario
botonRegistro.addEventListener("click",function(evento){
    evento.preventDefault()

    //4.Se construye un objeto con los datos del formulario
    let objetoEnvioDatosUsuario={
        nombres:nombreUsuario.value, 
        fechaNacimiento:fechaNacimientoUsuario.value,
        ubicacion:ubicacionUsuario.value, 
        metaAhorro:metaAhorroUsuario.value
    }

    console.log(objetoEnvioDatosUsuario)

    /*Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
    });*/
})




//OBJETIVO:RENDERIZAR DATOS QUE VIENEN DEL BACK
//1. se queman los datos (MOCK)
let usuarios=[
    {id:20,nombres:"Juan Jose Gallego",metaAhorro:20000000},
    {id:30,nombres:"Yasuri Yamile",metaAhorro:10000000},
    {id:200,nombres:"Pedro Paramo",metaAhorro:40000000},
    {id:20,nombres:"Juan Jose Gallego",metaAhorro:20000000},
    {id:30,nombres:"Yasuri Yamile",metaAhorro:10000000},
    {id:200,nombres:"Pedro Paramo",metaAhorro:40000000},
    {id:20,nombres:"Juan Jose Gallego",metaAhorro:20000000},
    {id:30,nombres:"Yasuri Yamile",metaAhorro:10000000},
    {id:200,nombres:"Pedro Paramo",metaAhorro:40000000},
    {id:20,nombres:"Juan Jose Gallego",metaAhorro:20000000},
    {id:30,nombres:"Yasuri Yamile",metaAhorro:10000000},
    {id:200,nombres:"Pedro Paramo",metaAhorro:40000000},
    {id:20,nombres:"Juan Jose Gallego",metaAhorro:20000000},
    {id:30,nombres:"Yasuri Yamile",metaAhorro:10000000},
    {id:200,nombres:"Pedro Paramo",metaAhorro:40000000},
    {id:20,nombres:"Juan Jose Gallego",metaAhorro:20000000},
    {id:30,nombres:"Yasuri Yamile",metaAhorro:10000000},
    {id:200,nombres:"Pedro Paramo",metaAhorro:40000000}
]

//2. Recorrer el arreglo de datos del back
let fila=document.getElementById("fila")
usuarios.forEach(function(usuario){
    console.log(usuario)
    //2.1 TRAVERSING
    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","p-5","shadow")

    let nombrecard=document.createElement("h3")
    nombrecard.textContent=usuario.nombres

    //2.2 Se asocian las creaciones
    tarjeta.appendChild(nombrecard)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})
