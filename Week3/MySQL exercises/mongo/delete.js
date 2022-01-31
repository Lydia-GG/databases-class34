const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

const uri = `mongodb+srv://hackyourfuture:${process.env.PASS}@cluster0.bxfks.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect(async (err) => {
  const collection = client.db('world').collection('city');

  await collection.deleteOne({
    ID: 9999,
  });

  client.close();
});
