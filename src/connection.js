const { mainModule } = require('process');

{/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Aarushi:<password>@cluster0.tkmjp.gcp.mongodb.net/Cultured?retryWrites=true&w=majority";
{/*const uri = "mongodb://Aarushi:pwd@a.com:27017,b.com:27017,c.com:27017/Cultured";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("Cultured").collection("devices");
  // perform actions on the collection object
  //this is where we might insert/delete
  //add this code to app.js probably
  //try to print out info from database
  console.log("Database created");

  // Make the appropriate DB calls
  //the function throwing errors presently so no way to check if my code works
  listDatabases(client);

  client.close();
});

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}; 



const MongoClient = require('mongodb').MongoClient;

async main() {
const uri = "mongodb+srv://Aarushi:thehost22@cluster0.tkmjp.gcp.mongodb.net/Cultured?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

{/*async function createClient({ 

 client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("created connection with database");

  console.log("gonna try to list databases");
  //databasesList = client.db().admin().listDatabases();
  //console.log("Databases:");
  //databasesList.databases.forEach(db => console.log(` - ${db.name}`));  

  //the function throwing errors presently so no way to check if my code works
  await listDatabases(client);

  client.close();
  });
//});

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log(databasesList);
  console.log(databasesList.databases);

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}; 
*/}

const { MongoClient } = require('mongodb');

async function main() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://Brian:<password>@cluster0.tkmjp.gcp.mongodb.net/Cultured?retryWrites=true&w=majority";;

    /**
     * The Mongo Client you will use to interact with your database
     * See https://mongodb.github.io/node-mongodb-native/3.3/api/MongoClient.html for more details
     */
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

/**
 * Print the names of all available databases
 * @param {MongoClient} client A MongoClient that is connected to a cluster
 */
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

