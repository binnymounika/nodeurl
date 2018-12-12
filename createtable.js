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
         connection.query("create table friends1 (name varchar(20),id int(8), location varchar(20))",function(err,suc)
        {
            if(err)
            {
                throw err
            }
            else
            {
                console.log("table created")
            }
        })
    }
})