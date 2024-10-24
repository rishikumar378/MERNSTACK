const express=require('express')//importing 3rd party module
const student=express();//calling express basoic function
student.get('/student',(req,res)=>{//read curd restfull concept we are calling
    res.send("heyy read now");//response to the client
});
student.put('/student',(req,res)=>{//read curd restfull concept we are calling
    res.send("heyyy write now");//response to the client
});
student.post('/student',(req,res)=>{//read curd restfull concept we are calling
    res.send("heyyy create now");//response to the client
});
student.delete('/student',(req,res)=>{//read curd restfull concept we are calling
    res.send("heyyy delete now");//response to the client
});

//running server
student.listen(3000,()=>{
    console.log("currently server runing");
});

student.get('/details',(req,res)=>{
    const stdetails=[{"id":1,"name":"jhon snow"},
        {"id":2,"name":"denereys stromborn"},{"id":3,"name":"tyrion lannister"},{"id":4,"name":"jammie lansister"}
    ];
    res.json(stdetails);
});