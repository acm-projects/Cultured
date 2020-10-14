const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Brian:<password>@cluster0.tkmjp.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  //this is where we might insert/delete
  //add this code to app.js probably
  //try to print out info from database
  console.log("Database created");

  // Make the appropriate DB calls
  //the function throwing errors presently so no way to check if my code works
  await listDatabases(client);

  client.close();
});

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};