const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());

app.get('/posts', (request, response) => {

    const connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'vado'
    });

    connection.connect((err)=>{

        if(!err) {
            console.log("Database is connected ... nn");    
        } else {
            console.log("Error connecting database ... nn");    
        }
    });

    connection.query("SELECT * FROM Menu", (err, rows, fields)=>{

        const menu = rows.map((row) => {

            return ({type:row.type,
                    name: row.name,
                    subname: row.subname,
                    price: row.price});
        });

        response.json(menu);

    });
});


app.listen(port, () =>{
  console.log(`Server is up and running on port ${port}`);
});