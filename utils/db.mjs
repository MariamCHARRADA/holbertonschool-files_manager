import mongodb, { MongoClient } from 'mongodb';

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';
    this.isConnected = false;
  }

  isAlive() {
    return this.isConnected;
  }

  async nbUsers() {

  }

  async nbFiles() {

  }
}

const dbClient = new DBClient();
export default dbClient;
