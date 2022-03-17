const getItems = new Promise((resolve, reject) => {

    let status = true

    if(status){
        setTimeout(() => {
        resolve(console.log("Tarea resuelta"))
            
        }, 2000)
    }else{
        reject("Se ha producido un error")
    }

})

export default getItems
