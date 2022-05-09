import express from 'express'
import Db from './src/config/db.js'
const server = express()

Db()


server.listen(27017 , () => {
    console.log('funcionanding');
})