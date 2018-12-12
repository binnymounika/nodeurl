var mysqldb=require('mysql')
var connection=mysqldb.createConnection({

host:'localhost',
user:'root',
password:'',
database:'dbfromnode1'

})
connection.connect(function(err)
{
    if(err)
    {
        throw err
    }
    else{


        console.log("connected to my sql server")
         connection.query("insert into friends(id,name,location) values (2,'mounikarn','ch')",function(err,suc)
        {
            
            if(err)
            {
                throw err
            }
            else
            {
                console.log("row inserted")
            }
        })
    }
})