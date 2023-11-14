const express = require('express');
const mongodb = require('mongodb');
const app = express();
const port = 3002;

const MongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/mydb2";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database connected!");
    db.close();
  });
  
app.get('/' , (req ,res )=> {
    res.send('Hello World!')
});

app.listen(port , ()=>{
    console.log(`server is running on port ${port}`)
});
