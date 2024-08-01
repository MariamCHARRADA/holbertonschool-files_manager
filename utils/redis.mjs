import { createClient } from 'redis';
import { promisify } from 'util';

class RedisClient {
  constructor() {
    this.client = createClient();
    this.isConnected = false;

    this.getAsync = promisify(this.client.get).bind(this.client);
    this.setexAsync = promisify(this.client.setex).bind(this.client);
    this.delAsync = promisify(this.client.del).bind(this.client);

    this.client.on('error', (err) => {
      console.log(err);
      this.isConnected = false;
    });

    this.client.on('ready', () => {
      this.isConnected = true;
    });
  }

  isAlive() {
    return this.isConnected;
  }

  async get(key) {
    return await this.getAsync(key);
  }

  async del(key) {
    return await this.delAsync(key);
  }

  async set(key, value, duration) {
    return await this.setexAsync(key, value, duration);
  }
}

const redisClient = new RedisClient();
export default redisClient;
