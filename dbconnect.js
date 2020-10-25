const {MongoClient} = require('mongodb');

async function main(){
    const uri = "mongodb+srv://Brian:ufh36pt92KnmW762@cluster0.tkmjp.gcp.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri,{ useNewUrlParser: true, useUnifiedTopology: true });
    try{
      await client.connect();  
      await listDatabases(client);
      await createListing(client,
        {
            name: "Pakistan",
            capital: "Islamabad"
        });
        
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

async function createListing(client, newListing){
    const result = await client.db("Cultured").collection("Countries").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}