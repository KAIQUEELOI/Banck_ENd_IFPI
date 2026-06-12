import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json({ pong: true });
});

export default router;