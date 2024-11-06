export async function buscarUsuarios(){
    //1. PA ONDE VOY / URL SERVICIO
    const URL="http://localhost:8000/usuario"
    //2 A HACER QUE OME / CONF PETICION
    let peticion={
        method:"GET"
    }
    //3. VAYA PS OME / CONSUMA EL API
    let respuestaInicial=await fetch(URL,peticion)
    let respuestaFinal=await respuestaInicial.json()
    return(respuestaFinal)
}

export async function registrarUsuario(datosUsuario){
    const URL="http://localhost:8000/usuario"
    let peticion={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datosUsuario) 
    }
    let respuestaInicial=await fetch(URL,peticion)
    let respuestaFinal=await respuestaInicial.json()

    console.log(respuestaFinal)


}