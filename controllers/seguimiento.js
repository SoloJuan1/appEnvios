const {request, response} = require('express')

const GetSeguimiento = (req = request,res = response) =>
    res.send('GET Endpoint para Seguimiento')


const PostSeguimiento = (req = request,res = response) =>
    res.send('POST Endpoint para Seguimiento')


const PutSeguimiento = (req = request,res = response) =>
    res.send('PUT Endpoint para Seguimiento')


const DeleteSeguimiento = (req = request,res = response) =>
    res.send('DELETE Endpoint para Seguimiento')


module.exports = {
    GetSeguimiento,
    PostSeguimiento,
    PutSeguimiento,
    DeleteSeguimiento
}