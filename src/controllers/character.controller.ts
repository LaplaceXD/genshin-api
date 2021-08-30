import { scraper } from "../utils/scraper";
import { Handler } from "express";
import { parseCharactersPageData } from "./../services/character.service";
import { baseUrlEndpoint } from "../utils/constants";

export const getCharacters: Handler = async (_, res) => {
    const data = await scraper(`${baseUrlEndpoint}/db/char/characters/?lang=EN`, parseCharactersPageData);

    res.send(data);
};
