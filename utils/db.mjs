import mongodb from 'mongodb';

const { MongoClient } = mongodb;

const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || 27017;
const database = process.env.DB_DATABASE || 'files_manager';

const url = `mongodb://${host}:${port}`;
class DBClient {
  constructor() {
    MongoClient.connect(url, { useUnifiedTopology: true }, (error, client) => {
      if (error) {
        console.log(error.message);
        this.db = false;
      }
      this.db = client.db(database);
      this.users = this.db.collection('users');
      this.files = this.db.collection('files');
    });
  }

  isAlive() {
    return !!this.db;
  }

  async nbUsers() {
    const users = this.users.countDocuments();
    return users;
  }

  async nbFiles() {
    const files = this.files.countDocuments();
    return files;
  }
}

const dbClient = new DBClient();
export default dbClient;
