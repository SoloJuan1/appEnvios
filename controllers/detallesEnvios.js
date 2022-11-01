const {request, response} = require('express')

const GetDetallesEnvios = (req = request,res = response) =>{
    let lista =new ListadoDetalleEnvios()
    let datosJSON = leerDB('envios')
    lista.cargarTareaFromArray(datosJSON)
    res.json(lista.listadoArr)
}


const PostDetallesEnvios = (req = request,res = response) =>
    res.send('POST Endpoint para Detalle Envios')


const PutDetallesEnvios = (req = request,res = response) =>
    res.send('PUT Endpoint para Detalle Envios')


const DeleteDetallesEnvios = (req = request,res = response) =>
    res.send('DELETE Endpoint para Detalle Envios')


module.exports = {
    GetDetallesEnvios,
    PostDetallesEnvios,
    PutDetallesEnvios,
    DeleteDetallesEnvios
}
