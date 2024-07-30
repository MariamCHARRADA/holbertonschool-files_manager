import { createClient } from "redis";

class RedisClient {
  constructor() {
    this.client = createClient();
    this.isConnected = false;


    this.client.on("error", (err) => {
      console.log(err);
      this.isConnected = false;
    });

    this.client.on("ready", () => {
      this.isConnected = true;
    });
  }

  isAlive() {
    return this.isConnected;
  }

  async get(key) {
    return this.client.get("key", function (err, reply) {
      console.log(reply);
    });
  }

  async del(key) {
    return this.client.del(key);
  }

  async set(key, value, duration) {
    return this.client.set(key, value, duration);
  }
}

export default RedisClient;
