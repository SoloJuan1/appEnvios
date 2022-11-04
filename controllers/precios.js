const {request, response} = require('express')

const GetPrecios = (req = request,res = response) =>{
    res.send('GET Endpoint para Precios')
}

const PostPrecios = (req = request,res = response) =>{
    res.send('POST Endpoint para Precios')
}

const PutPrecios = (req = request,res = response) =>{
    res.send('PUT Endpoint para Precios')
}

const DeletePrecios = (req = request,res = response) =>{
    res.send('DELETE Endpoint para Precios')
}

module.exports = {
    GetPrecios,
    PostPrecios,
    PutPrecios,
    DeletePrecios
}