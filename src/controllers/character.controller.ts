import { scraper } from "../utils/scraper";
import { Handler } from "express";
import { baseUrlEndpoint } from "../utils/constants";
import { parseCharactersPageData, parseCharacter, ParseCharacter } from "./../services/character.service";

export const getCharacters: Handler = async (_, res) => {
    const data = await scraper(`${baseUrlEndpoint}/db/char/characters/?lang=EN`, parseCharactersPageData);

    res.send(data);
};

export const getCharacter: Handler = async (req, res) => {
    const { char } = req.params;
    if (!char) {
        res.status(404).send(`Character: ${char} was not found.`);
        return;
    }

    let data = {};
    for (let parser in parseCharacter) {
        const result = await scraper(
            `${baseUrlEndpoint}/db/char/${char}/?lang=EN`,
            parseCharacter[parser as keyof ParseCharacter]
        );
        data = { ...data, [parser]: result };
    }

    res.send(data);
};

export const getCharacterInfo: Handler = async (req, res) => {
    const { char, info } = req.params;
    if (!char) {
        res.status(404).send(`Character: ${char} was not found.`);
        return;
    }
    if (!info) {
        res.status(404).send(`Data type: ${info} was not found.`);
        return;
    }

    const data = await scraper(
        `${baseUrlEndpoint}/db/char/${char}?lang=EN`,
        parseCharacter[info as keyof ParseCharacter]
    );

    res.send(data);
};
