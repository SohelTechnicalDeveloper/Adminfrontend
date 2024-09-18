import express from 'express'
const port = 3000
const app = express()
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name:'dbdmxzalv',
})

const url = cloudinary.url('1_D_qgESE-fdl9wWNZsTpHWA_xqj81q')

console.log(url);


app.listen(port,()=>{
    
    console.log('server is Running '+port);
    
})