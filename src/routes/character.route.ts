import express from "express";
import { getCharacter, getCharacters } from "../controllers/character.controller";

const route = express.Router();

route.get("/", getCharacters);
route.get("/:char", getCharacter);

export default route;
