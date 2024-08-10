import redisClient from "../utils/redis";
import dbClient from "../utils/db";

const AppController = {
  getStatus(req, res) {
    return res.status(200).json({
      redis: redisClient.isAlive(),
      db: dbClient.isAlive(),
    });
  },

  getStats(req, res) {
    Promise.all([dbClient.nbUsers(), dbClient.nbFiles()])
      .then(([users, files]) => {
        res.status(200).json({ Users: users, Files: files });
      })
      .catch((error) => {
        res.status(500).json({ error: "Failed to retrieve stats" });
      });
  },
};

export default AppController;
