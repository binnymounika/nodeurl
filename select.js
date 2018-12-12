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
        console.log("connected to sql")
        var sql="select name,id,location from friends"
        connection.query(sql,function(err,result,fields)
        {
                  if(err)
            {
                throw err
            }
            else
            {
                console.log(JSON.stringify(result))
                console.log(result)
            }
        })
    }
})