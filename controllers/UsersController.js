import crypto from "crypto";
import dbClient from "../utils/db.mjs";

export const postNew = async (req, res) => {
  const { email, password } = req.body;

  try {
    const usersCollection = dbClient.users;
    const hashedPwd = crypto.createHash("sha1").update(password).digest("hex");

    const newUser = { email, password: hashedPwd };
    const result = await usersCollection.insertOne(newUser);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
