import { scraper } from "../utils/scraper";
import { Handler } from "express";
import { baseUrlEndpoint } from "../utils/constants";
import { parseCharactersPageData, parseCharacterPageData } from "./../services/character.service";

export const getCharacters: Handler = async (_, res) => {
    const data = await scraper(`${baseUrlEndpoint}/db/char/characters/?lang=EN`, parseCharactersPageData);

    res.send(data);
};

export const getCharacter: Handler = async (req, res) => {
    const { char } = req.params;
    const data = await scraper(`${baseUrlEndpoint}/db/char/${char}/?lang=EN`, parseCharacterPageData);

    res.send(data);
};
