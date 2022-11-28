const axios = require('axios');

exports.getIdCard =(req,res)=>{
    res.render("getIdCard")
}

exports.idCard =(req,res)=>{
  res.render("idCard")
}

exports.upload =(req,res)=>{
    res.render("upload")
}

