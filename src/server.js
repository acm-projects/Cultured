const {MongoClient} = require('mongodb');

const uri = "mongodb+srv://Aarushi:tJSNNM7pF8wDSEh3@cluster0.tkmjp.gcp.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri,{ useNewUrlParser: true, useUnifiedTopology: true });

    /*await client.connect();  
    await listDatabases(client);
    await findOneDocByName(client, "Sample"); */

    var result='';
    //app.use(cors()) // Use this after the variable declaration

async function main(){
    
    try{
      await client.connect();  
      await listDatabases(client);
      await findOneDocByName(client, "USA");
    } catch (e){
        console.error(e);
    } finally {
        await client.close();
    }
}
main().catch(console.error);

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

async function createDoc(client, newDoc){
    const result = await client.db("Cultured").collection("Countries").insertOne(newDoc);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function findOneDocByName(client, docName){
    console.log("before obtaining result");
    result = await client.db("Cultured").collection("Counties").findOne({ name: docName });
    console.log("after obtaining result");
    if (result) 
    {
        console.log(`Found a match in the collection with the name '${docName}':`);
        console.log(result);
        return result;
    } 
    else 
    {
        console.log(`No match found with the name '${docName}'`);
    }
}


var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')

var app = express();
var port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    client.connect();  
    listDatabases(client);
    findOneDocByName(client, "Sample");
  res.send({ information: result});
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
