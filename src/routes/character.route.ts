import express from "express";
import { getCharacter, getCharacterInfo, getCharacters } from "../controllers/character.controller";

const route = express.Router();

route.get("/", getCharacters);
route.get("/:char", getCharacter);
route.get("/:char/:info", getCharacterInfo);

export default route;
