import { scraper } from "../utils/scraper";
import { Request, Response } from "express";
import { parseCharactersPageData } from "./../services/character.service";

export async function getCharacters(_: Request, res: Response) {
    const baseUrl = "https://genshin.honeyhunterworld.com";
    const data = await scraper(`${baseUrl}/db/char/characters/?lang=EN`, parseCharactersPageData);

    res.send(data);
}
