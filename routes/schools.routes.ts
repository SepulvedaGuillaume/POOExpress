import express from "express";
import {createTestSchool, endYear} from "../controllers/schools.controller";

const router = express.Router();

router.post("/createTestSchool", createTestSchool);
router.post("/endYear", endYear);

export default router;