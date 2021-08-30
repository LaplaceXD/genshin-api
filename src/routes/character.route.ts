import express from "express";
import { getCharacters } from "../controllers/character.controller";

const route = express.Router();

route.get("/", getCharacters);

export default route;
