const Userdb =  require('../model/model')

exports.upload =(req,res)=>{
    const firstname  =req.body.firstname;      
    const lastname  =req.body.lastname;
    const mobile =req.body.mobile;
    const email  =req.body.email;
    const dob =req.body.dob;
    const gender  =req.body.gender;
    const addressline1  =req.body.addressline1;
    const addressline2  =req.body.addressline2;
    const batch =req.body.batch;
    const courseType =req.body.courseType;
    const courseName =req.body.courseName;

const student=new Userdb({
    firstname ,
    lastname ,
    mobile ,
    email ,
    dob,
    gender ,
    addressline1,
    addressline2 ,
    batch,
    courseType,
    courseName
    
})
student
.save(student)
.then(data => {
    // res.send(data)
    res.redirect('/');
})
.catch(err =>{  
    res.status(500).send({
        message : err.message || "Some error occurred while creating a create operation"
    });
});
}


exports.getIdCard=(req,res)=>
{
    const firstname  =req.body.firstname;      
    const lastname  =req.body.lastname;
    const mobile =req.body.mobile;


    // console.log(firstname,lastname,mobile);
    Userdb.findOne({mobile:mobile},(err,result)=>{
        console.log(result.firstname,result.lastname,result.mobile,result._id)
        if(firstname==result.firstname && lastname==result.lastname && mobile==result.mobile)
        {
            res.redirect(`/api/students/?id=${result._id}`)
        }
    })
}

exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}