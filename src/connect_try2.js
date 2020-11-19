const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Brian:OhqfZtDiLn1tXHYt@cluster0.tkmjp.gcp.mongodb.net/Test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("Test").collection("Brian");
  //console.log(client.db("Test"));
  console.log('Connected. . .');

  //perform actions on the collection object

  var testObj = {status: "ok"};
  collection.insertOne(testObj, err=>{
  if (err) throw err;
  console.log("Inserted testObj");
  })

  console.log('Closing. . .');
  client.close();
});