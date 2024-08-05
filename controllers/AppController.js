import redisClient from "../utils/redis.mjs";
import dbClient from "../utils/db.mjs";

const AppController = {
  async getStatus(req, res) {
    return res.status(200).json({
      redis: redisClient.isAlive(),
      db: dbClient.isAlive(),
    });
  },

  async getStats(req, res) {
    Promise.all([dbClient.nbUsers(), dbClient.nbFiles()]).then(
      ([users, files]) => {
        res.status(200).json({ Users: users, Files: files });
      }
    );
  },
};

export default AppController;
