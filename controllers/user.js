const { response, request } = require('express');


const usuariosGet  = (req = request, res = response) => {

    const { q } = req.query; //dDesestrcuturacion de argumentos por la url

    res.json({
        ok: true,
        msg: 'get API - controlador',
        q
    });
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        ok: true,
        msg: 'put API - controlador',
        id
    });
}

const usuariosPost = (req, res = response) => {

    const { nombre, edad} = req.body;

    res.json({
        ok: true,
        msg: 'post API - controlador',
        nombre,
        edad
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'delete API - controlador'
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'patch API - controlador'
    });
}
module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPatch,
    usuariosPost,
    usuariosPut
}