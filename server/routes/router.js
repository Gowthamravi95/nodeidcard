const route =require('express').Router()
const controller=require('../controller/controller')
const services=require('../services/render')

// route.get('/',controller.index);
route.post('/api/students',controller.upload);
route.get('/api/students',controller.find);
route.post('/',controller.getIdCard)



route.get('/',services.getIdCard);
route.get('/api/students/:id',services.idCard);
route.get('/upload',services.upload);

module.exports=route;