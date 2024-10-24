const fsys=require('fs');//file system,inbuilt module
const details=fsys.readFile('data.txt',(err,data)=>{
    if(err)
    {
        console.error("please enter proper d name");
    }
    else{
        console.log(data.toString());
    }
});