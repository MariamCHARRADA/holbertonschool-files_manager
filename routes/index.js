import express from 'express';
import { getStats, getStatus } from "../controllers/AppController.mjs";
import { postNew } from "../controllers/UsersController.mjs";

const router = express.Router();

router.get("/status", getStatus);
router.get("/stats", getStats);
router.post("/users", postNew);

export default router;
