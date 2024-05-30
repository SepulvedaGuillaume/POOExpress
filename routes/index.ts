import express from "express";
import schoolsRoutes from "./schools.routes";

const router = express.Router();

router.use("/", schoolsRoutes);

export default router;