import { MongoClient } from 'mongodb';

async function connectDB() {
  try {
    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@blogcluster.gcbgt.mongodb.net/BlogDB?retryWrites=true&w=majority`
    );
    const db = client.db();
    return [{ client, db }];
  } catch (err) {
    return [null, { statusCode: 500, message: 'Unable to connect to server' }];
  }
}

async function insertDB(client, db, collection, newData) {
  try {
    const result = await db.collection(collection).insertOne(newData);
    newData.id = result.insertedId;
    client.close();
    return [
      {
        statusCode: 201,
        message: 'Message sent successfully!',
        data: newData,
      },
    ];
  } catch (err) {
    client.close();
    return [null, { statusCode: 500, message: 'Unable to send message' }];
  }
}

export { connectDB, insertDB };
