import express from "express";
import { datasave, finddata } from "../controller/data.controller.js";

export const datarouter = express.Router();

datarouter.post("/save", datasave);
datarouter.get("/find", finddata);
