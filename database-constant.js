const {MongoClient} = require('mongodb');

async function main(){
    const uri = "mongodb+srv://Brian:ufh36pt92KnmW762@cluster0.tkmjp.gcp.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri,{ useNewUrlParser: true, useUnifiedTopology: true });
    try{
      await client.connect();  
      await parseDocs(client);
    } catch (e){
        console.error(e);
    } finally {
        await client.close();
    }
}
main().catch(console.error);

// array in form { location: "", countryName: "", countryCode: "", countryPage: "" }
async function parseDocs(client){
    let COUNTRIES = [];
    const list = await client.db("Cultured").collection("Countries").find().forEach(function(doc)
    {
        let entry = COUNTRIES.push({location: doc.location, countryName: doc.countryName, countryCode: doc.countryCode, countryPage: doc.countryPage });

    })
    COUNTRIES.forEach(function(item, index, array){
        console.log(item);
    })
}
