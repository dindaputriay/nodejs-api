// (5) buat router Mahasiswa
const {
    Router
} = require('express')
const express = require('express')
const Mahasiswa = require('../models/Mahasiswa')
const router = express.Router()

// Create
router.post('/', async (req, res) => {
    //tampung input mahasiswa
    const mahasiswaPost = new Mahasiswa({
        nama: req.body.nama,
        alamat: req.body.alamat
    })

    try {
        //simpan data
        const mahasiswa = await mahasiswaPost.save()
        // response
        res.json(mahasiswa)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

//update (method PUT)
router.put('/:mahasiswa', async (req, res) => {
    // tampung data yang mau diubah
    const data = {
        nama: req.body.nama,
        alamat: req.body.alamat
    }

    try {
        //update data disini
        const mahasiswa = await Mahasiswa.updateOne({
            _id: req.params.mahasiswaId
        }, data)
        // response success
        res.json(mahasiswa)
    } catch (error) {
        res.json({
            message: error
        })
    }
})