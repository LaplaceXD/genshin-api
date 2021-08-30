import { scraper } from "../utils/scraper";
import { Handler } from "express";
import { baseUrlEndpoint } from "../utils/constants";
import {
    parseCharactersPageData,
    parseCharacterPageData,
    parseCharacter,
    ParseCharacter,
} from "./../services/character.service";

export const getCharacters: Handler = async (_, res) => {
    const data = await scraper(`${baseUrlEndpoint}/db/char/characters/?lang=EN`, parseCharactersPageData);

    res.send(data);
};

export const getCharacter: Handler = async (req, res) => {
    const { char } = req.params;
    if (!char) return res.status(404).send(`Character: ${char} was not found.`);
    const data = await scraper(`${baseUrlEndpoint}/db/char/${char}/?lang=EN`, parseCharacterPageData);

    res.send(data);
};

export const getCharacterInfo: Handler = async (req, res) => {
    const { char, info } = req.params;
    if (!char) return res.status(404).send(`Character: ${char} was not found.`);
    if (!info) return res.status(404).send(`Data type: ${info} was not found.`);

    const data = await scraper(
        `${baseUrlEndpoint}/db/char/${char}?lang=EN`,
        parseCharacter[info as keyof ParseCharacter]
    );

    res.send(data);
};
