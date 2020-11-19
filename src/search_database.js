const {MongoClient} = require('mongodb');

async function main(){
    const uri = "mongodb+srv://Aarushi:tJSNNM7pF8wDSEh3@cluster0.tkmjp.gcp.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri,{ useNewUrlParser: true, useUnifiedTopology: true });
    try{
      await client.connect();  
      await listDatabases(client);
      await findOneDocByName(client, "France");
      await findOneDocByName(client, "Sample");
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
    const result = await client.db("Cultured").collection("Counties").findOne({ name: docName });
    if (result) 
    {
        console.log(`Found a match in the collection with the name '${docName}':`);
        console.log(result);
    } 
    else 
    {
        console.log(`No match found with the name '${docName}'`);
    }
}