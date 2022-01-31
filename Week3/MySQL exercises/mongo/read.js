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

  const findByName = await collection
    .find({
      Name: 'Kairo',
    })
    .toArray();
  console.log('\u001b[1;36m' + 'Found by name' + '\u001b[0m', findByName);

  const findByCountryCode = await collection
    .find({
      CountryCode: 'Kai',
    })
    .toArray();
  console.log(
    '\u001b[1;36m' + 'Found by Country Code' + '\u001b[0m',
    findByCountryCode
  );
  client.close();
});
